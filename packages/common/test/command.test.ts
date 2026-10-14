import type { DynamicModule, OnModuleDestroy, Type } from '@nestjs/common'
import { ConfigurableModuleBuilder, Inject, Injectable, Module, Optional } from '@nestjs/common'
import { join } from 'path'
import { afterEach, describe, expect, it, vi } from 'vitest'

import type { LockerService } from '../src'
import {
  CliModule,
  Command,
  ConfigService,
  FilesystemModule,
  Flags,
  JsonParser,
  LockerModule,
  LogLevels,
  LoggerModule,
  LogoModule,
  ParserModule,
  TOKEN_COMMAND,
  TOKEN_COMMAND_FLAGS,
  TOKEN_OCLIF_CONFIG
} from '../src'

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

  function app(stderr?: LogLevels[], ...imports: (Type | DynamicModule)[]): Type {
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
    const listeners = process.listenerCount('SIGTERM')

    try {
      await command.run(argv, { root: join(import.meta.dirname, '..') })
    } catch(e: any) {
      output.error = e
    } finally {
      spies.forEach((spy) => spy.mockRestore())
    }

    expect(process.listenerCount('SIGTERM')).toBe(listeners)

    return output
  }

  afterEach(() => {
    process.exitCode = undefined
  })

  it('writes logs and the logo to stdout by default', async() => {
    const { stdout, stderr, error } = await run(greet(app()))

    expect(error).toBeUndefined()
    expect(stdout).toContain('@cenk1cenk2/oclif-common v')
    expect(stdout).toContain('hello world')
    expect(stderr).toBe('')
  })

  it('writes logs and the logo to stderr when the logger is told to', async() => {
    const { stdout, stderr, error } = await run(greet(app(Object.values(LogLevels))))

    expect(error).toBeUndefined()
    expect(stdout).toBe('')
    expect(stderr).toContain('@cenk1cenk2/oclif-common v')
    expect(stderr).toContain('hello world')
  })

  it('feeds parsed flags into module factories', async() => {
    const { stdout } = await run(greet(app()), ['--name', 'flags'])

    expect(stdout).toContain('hello flags')
  })

  it('provides the running command through the command module', async() => {
    let context: unknown[]

    class Context extends greet(app()) {
      public async run(): Promise<void> {
        const cs = this.app.get(ConfigService)

        context = [this.app.get(TOKEN_COMMAND), this.app.get(TOKEN_OCLIF_CONFIG), cs.command, cs.oclif]
      }
    }

    const { error } = await run(Context)

    expect(error).toBeUndefined()
    expect(context).toEqual([Context, expect.objectContaining({ name: '@cenk1cenk2/oclif-common' }), Context, expect.objectContaining({ name: '@cenk1cenk2/oclif-common' })])
  })

  it('reads through a locker configured from the runtime config', async() => {
    const { stdout } = await run(greet(app()))

    expect(stdout).toContain('locker: @cenk1cenk2/oclif-common')
  })

  it('fails to start when an injected property has no provider', async() => {
    class Missing extends greet(app(Object.values(LogLevels))) {
      @Inject('UNPROVIDED') private readonly unprovided: unknown
    }

    const { error, stderr } = await run(Missing)

    expect(error.message).toBe('Can not inject property "unprovided" of Missing, no provider for: UNPROVIDED')
    expect(stderr).toContain('[F] Can not inject property "unprovided"')
  })

  it('leaves an optional property without a provider empty', async() => {
    let injected: unknown = 'untouched'

    class Optionally extends greet(app()) {
      @Optional() @Inject('UNPROVIDED') private readonly unprovided: unknown

      public async run(): Promise<void> {
        injected = this.unprovided
      }
    }

    const { error } = await run(Optionally)

    expect(error).toBeUndefined()
    expect(injected).toBeUndefined()
  })

  it('names the cause when the type of an injected property is lost at runtime', async() => {
    interface Shape {
      name: string
    }

    class Erased extends greet(app(Object.values(LogLevels))) {
      @Inject() private readonly shape: Shape
    }

    const { error } = await run(Erased)

    expect(error.message).toMatch(/^Can not inject property "shape" of Erased, its type is not known at runtime: import the class as a value instead of with "import type"/)
  })

  it('logs a module boot failure with the logger options of the command module', async() => {
    const { stdout, stderr, error } = await run(greet(app(Object.values(LogLevels), BrokenModule)), ['--log-level', 'debug'])

    const [fatal, debug, ...stack] = stderr.trimEnd().split('\n')

    expect(error.message).toBe('factory exploded')
    expect(stdout).toBe('')
    expect([fatal, debug]).toEqual(['[F] factory exploded', '[D] Error: factory exploded'])
    expect(stack.length).toBeGreaterThan(0)
    expect(stack.every((line) => line.startsWith('[D]     at '))).toBe(true)
  })

  it('keeps a boot failure on stderr when the logger options come from a factory', async() => {
    @Module({
      imports: [
        LoggerModule.forRootAsync({ inject: [TOKEN_COMMAND_FLAGS], useFactory: () => ({ stderr: Object.values(LogLevels) }) }),
        FilesystemModule,
        ParserModule.forRoot(),
        LogoModule.forRoot({}),
        BrokenModule
      ]
    })
    class AsyncModule {}

    const { stdout, stderr } = await run(greet(AsyncModule), ['--log-level', 'debug'])

    expect(stdout).toBe('')
    expect(stderr).toContain('[F] factory exploded')
    expect(stderr).toContain('[D] Error: factory exploded')
  })

  it('closes the application when the command fails', async() => {
    const destroyed = vi.fn()

    @Injectable()
    class Resource implements OnModuleDestroy {
      public onModuleDestroy(): void {
        destroyed()
      }
    }

    @Module({ providers: [Resource] })
    class ResourceModule {}

    class Failing extends greet(app(Object.values(LogLevels), ResourceModule)) {
      public async run(): Promise<void> {
        throw new Error('run failed')
      }
    }

    const { error } = await run(Failing)

    expect(error.message).toBe('run failed')
    expect(destroyed).toHaveBeenCalledOnce()
  })

  it('reports an unknown flag through the fallback logger', async() => {
    const { stdout, stderr, error } = await run(greet(app(Object.values(LogLevels))), ['--nope'])

    expect(error.message).toContain('Nonexistent flag: --nope')
    expect(stdout).toBe('')
    expect(stderr).toContain('[F] Nonexistent flag: --nope')
  })
})
