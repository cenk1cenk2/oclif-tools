import type { DynamicModule, Type } from '@nestjs/common'
import { ConfigurableModuleBuilder, Inject, Injectable, Module } from '@nestjs/common'
import { join } from 'path'
import { afterEach, describe, expect, it, vi } from 'vitest'

import type { LockerService } from '../src'
import { CliModule, Command, ConfigService, Flags, JsonParser, LockerModule, TOKEN_COMMAND_FLAGS } from '../src'

describe('Command', () => {
  const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<{ name: string }>().setClassMethodName('forRoot').build()
  const LOCKER = Symbol('LOCKER')

  @Injectable()
  class GreetService {
    constructor(@Inject(MODULE_OPTIONS_TOKEN) private readonly options: { name: string }) {}

    public hello(): string {
      return `hello ${this.options.name}`
    }
  }

  @Module({
    providers: [GreetService],
    exports: [GreetService]
  })
  class GreetModule extends ConfigurableModuleClass {}

  @Module({
    providers: [
      {
        provide: 'BROKEN',
        useFactory: (): never => {
          throw new Error('factory exploded')
        }
      }
    ]
  })
  class BrokenModule {}

  function app(stderr: boolean, ...imports: (Type | DynamicModule)[]): Type {
    @Module({
      imports: [
        CliModule.forRoot({ logger: { stderr } }),
        GreetModule.forRootAsync({
          inject: [TOKEN_COMMAND_FLAGS],
          useFactory: (flags: { name: string }) => ({ name: flags.name })
        }),
        LockerModule.forFeatureAsync({
          token: LOCKER,
          inject: [ConfigService],
          useFactory: (cs: ConfigService) => ({ file: join(cs.root, 'package.json'), parser: JsonParser })
        }),
        ...imports
      ]
    })
    class AppModule {}

    return AppModule
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function greet(module: Type) {
    class Greet extends Command<typeof Greet> {
      static module = module

      static flags = {
        name: Flags.string({ default: 'world' })
      }

      @Inject() private readonly greet: GreetService

      public async run(): Promise<void> {
        this.logger.info(this.greet.hello())
        this.logger.info('locker: %s', (await this.app.get<LockerService>(LOCKER).read()).name)
      }
    }

    return Greet
  }

  async function run(command: ReturnType<typeof greet>, argv: string[] = []): Promise<{ stdout: string; stderr: string; error?: Error }> {
    const output: { stdout: string; stderr: string; error?: Error } = { stdout: '', stderr: '' }
    const spies = (['stdout', 'stderr'] as const).map((stream) =>
      vi.spyOn(process[stream], 'write').mockImplementation((chunk: string | Uint8Array): boolean => {
        output[stream] += chunk.toString()

        return true
      })
    )
    const signals = ['SIGINT', 'SIGTERM'].map((signal) => [signal, process.listeners(signal as NodeJS.Signals)] as const)

    try {
      await command.run(argv, { root: join(import.meta.dirname, '..') })
    } catch(e: any) {
      output.error = e
    } finally {
      spies.forEach((spy) => spy.mockRestore())
      // the command exits the process on these signals, which would also fire when the test worker shuts down
      signals.forEach(([signal, listeners]) =>
        process
          .listeners(signal as NodeJS.Signals)
          .filter((listener) => !listeners.includes(listener))
          .forEach((listener) => process.off(signal, listener))
      )
    }

    return output
  }

  afterEach(() => {
    process.exitCode = undefined
  })

  it('writes logs and the logo to stdout by default', async() => {
    const { stdout, stderr, error } = await run(greet(app(false)))

    expect(error).toBeUndefined()
    expect(stdout).toContain('@cenk1cenk2/oclif-common v')
    expect(stdout).toContain('hello world')
    expect(stderr).toBe('')
  })

  it('writes logs and the logo to stderr when the logger is told to', async() => {
    const { stdout, stderr, error } = await run(greet(app(true)))

    expect(error).toBeUndefined()
    expect(stdout).toBe('')
    expect(stderr).toContain('@cenk1cenk2/oclif-common v')
    expect(stderr).toContain('hello world')
  })

  it('feeds parsed flags into module factories', async() => {
    const { stdout } = await run(greet(app(false)), ['--name', 'flags'])

    expect(stdout).toContain('hello flags')
  })

  it('reads through a locker configured from the runtime config', async() => {
    const { stdout } = await run(greet(app(false)))

    expect(stdout).toContain('locker: @cenk1cenk2/oclif-common')
  })

  it('fails to start when an injected property has no provider', async() => {
    class Missing extends greet(app(true)) {
      @Inject('UNPROVIDED') private readonly unprovided: unknown
    }

    const { error, stderr } = await run(Missing)

    expect(error.message).toBe('Can not inject property "unprovided" of Missing, no provider for: UNPROVIDED')
    expect(stderr).toContain('[F] Can not inject property "unprovided"')
  })

  it('logs a module boot failure with the logger options of the command module', async() => {
    const { stdout, stderr, error } = await run(greet(app(true, BrokenModule)), ['--log-level', 'debug'])

    expect(error.message).toBe('factory exploded')
    expect(stdout).toBe('')
    expect(stderr).toContain('[F] factory exploded')
    expect(stderr).toContain('[D] Error: factory exploded')
  })

  it('reports an unknown flag through the fallback logger', async() => {
    const { stdout, stderr, error } = await run(greet(app(true)), ['--nope'])

    expect(error.message).toContain('Nonexistent flag: --nope')
    expect(stdout).toBe('')
    expect(stderr).toContain('[F] Nonexistent flag: --nope')
  })
})
