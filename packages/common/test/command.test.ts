import type { DynamicModule, OnModuleDestroy, Provider, Type } from '@nestjs/common'
import { ConfigurableModuleBuilder, Inject, Injectable, Module } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { join } from 'path'
import { afterEach, describe, expect, it, vi } from 'vitest'

import type { CommandHandler, CommandInput } from '../src'
import {
  Args,
  Command,
  ConfigLoaderService,
  ConfigService,
  FileSystemService,
  Flags,
  LogLevels,
  LoggerModule,
  LoggerService,
  LogoModule,
  LogoService,
  ParserService,
  TaskManager,
  TaskModule,
  TOKEN_COMMAND,
  TOKEN_COMMAND_FLAGS,
  TOKEN_OCLIF_CONFIG,
  ValidatorService
} from '../src'

describe('Command', () => {
  const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<{ name: string }>().setClassMethodName('forRoot').build()

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

  @Injectable()
  class GreetHandler implements CommandHandler {
    constructor(
      private readonly greet: GreetService,
      private readonly logger: LoggerService
    ) {}

    public async run(): Promise<void> {
      this.logger.info(this.greet.hello())
    }
  }

  function app(options: { stderr?: LogLevels[]; providers?: Provider[]; imports?: (Type | DynamicModule)[] } = {}): Type {
    @Module({
      imports: [
        LoggerModule.forRoot({ stderr: options.stderr }),
        LogoModule.forRoot(),
        GreetModule.forRootAsync({
          inject: [TOKEN_COMMAND_FLAGS],
          useFactory: (flags: { name: string }) => ({ name: flags.name })
        }),
        ...(options.imports ?? [])
      ],
      providers: options.providers ?? [GreetHandler]
    })
    class AppModule {}

    return AppModule
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function greet(module: Type | DynamicModule, handler: Type<CommandHandler<any>> = GreetHandler) {
    class Greet extends Command {
      static module = module
      static handler = handler

      static flags = {
        name: Flags.string({ default: 'world' }),
        loud: Flags.boolean({ default: false }),
        times: Flags.integer({ default: 1 })
      }

      static args = {
        person: Args.string()
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

    try {
      await command.run(argv, { root: join(import.meta.dirname, '..') })
    } catch(e: any) {
      output.error = e
    } finally {
      spies.forEach((spy) => spy.mockRestore())
    }

    return output
  }

  afterEach(() => {
    process.exitCode = undefined
  })

  it('runs the handler with its constructor dependencies and logs to stdout by default', async() => {
    const { stdout, stderr, error } = await run(greet(app()))

    expect(error).toBeUndefined()
    expect(stdout).toContain('@cenk1cenk2/oclif-common v')
    expect(stdout).toContain('hello world')
    expect(stderr).toBe('')
  })

  it('writes logs and the logo to stderr when the logger is told to', async() => {
    const { stdout, stderr, error } = await run(greet(app({ stderr: Object.values(LogLevels) })))

    expect(error).toBeUndefined()
    expect(stdout).toBe('')
    expect(stderr).toContain('@cenk1cenk2/oclif-common v')
    expect(stderr).toContain('hello world')
  })

  it('hands the parsed flags and args to the handler', async() => {
    let input: CommandInput

    @Injectable()
    class InputHandler implements CommandHandler {
      public async run(received: CommandInput): Promise<void> {
        input = received
      }
    }

    const { error } = await run(greet(app({ providers: [InputHandler] }), InputHandler), ['friend', '--name', 'flags', '--loud', '--times', '3'])

    expect(error).toBeUndefined()
    expect(input.args).toEqual({ person: 'friend' })
    expect(input.flags).toMatchObject({
      name: 'flags',
      loud: true,
      times: 3,
      json: false
    })
    expect(input.flags['log-level']).toBe(LogLevels.INFO)
  })

  it('feeds parsed flags into module factories', async() => {
    const { stdout } = await run(greet(app()), ['--name', 'flags'])

    expect(stdout).toContain('hello flags')
  })

  it('provides the running command through the command module', async() => {
    let context: unknown[]

    @Injectable()
    class ContextHandler implements CommandHandler {
      constructor(
        @Inject(TOKEN_COMMAND) private readonly command: unknown,
        @Inject(TOKEN_OCLIF_CONFIG) private readonly oclif: unknown,
        private readonly cs: ConfigService
      ) {}

      public async run(): Promise<void> {
        context = [this.command, this.oclif, this.cs.command, this.cs.oclif]
      }
    }

    const Context = greet(app({ providers: [ContextHandler] }), ContextHandler)
    const { error } = await run(Context)

    expect(error).toBeUndefined()
    expect(context).toEqual([Context, expect.objectContaining({ name: '@cenk1cenk2/oclif-common' }), Context, expect.objectContaining({ name: '@cenk1cenk2/oclif-common' })])
  })

  it('provides the task manager with its own options over the runtime config', async() => {
    const task = vi.fn()
    let fallback: unknown
    let exitOnError: unknown

    @Injectable()
    class TaskHandler implements CommandHandler {
      constructor(private readonly tasks: TaskManager) {}

      public async run(): Promise<void> {
        fallback = this.tasks.options.fallbackRendererCondition
        exitOnError = this.tasks.options.exitOnError

        this.tasks.add([{ task }])

        await this.tasks.runAll()
      }
    }

    const { error } = await run(greet(app({ providers: [TaskHandler], imports: [TaskModule.forRoot({ exitOnError: false })] }), TaskHandler), ['--log-level', 'debug'])

    expect(error).toBeUndefined()
    expect(fallback).toBe(true)
    expect(exitOnError).toBe(false)
    expect(task).toHaveBeenCalledOnce()
  })

  it('keeps the task manager to the modules that import it unless it is global', async() => {
    let options: unknown

    @Injectable()
    class TaskHandler implements CommandHandler {
      constructor(private readonly tasks: TaskManager) {}

      public async run(): Promise<void> {
        options = this.tasks.options
      }
    }

    function command(task: DynamicModule, exported: boolean): ReturnType<typeof greet> {
      @Module({ imports: [task], exports: exported ? [TaskModule] : [] })
      class SharedModule {}

      @Module({ imports: [SharedModule], providers: [TaskHandler] })
      class CommandModule {}

      return greet(CommandModule, TaskHandler)
    }

    expect((await run(command(TaskModule.forRoot(), false))).error.message).toMatch(/can't resolve dependencies of the TaskHandler/)
    expect((await run(command(TaskModule.forRoot(), true))).error).toBeUndefined()
    expect((await run(command(TaskModule.forRoot({ isGlobal: true }), false))).error).toBeUndefined()
    expect(options).not.toHaveProperty('isGlobal')
  })

  it('fails clearly when the module does not provide the handler', async() => {
    const { error, stderr } = await run(greet(app({ providers: [] })))

    expect(error.message).toBe('Can not run command greet, its module does not provide the handler: GreetHandler')
    expect(stderr).toContain('[F] Can not run command greet')
  })

  it('boots with only the runtime modules when the command imports nothing', async() => {
    let missing: string[]

    @Injectable()
    class MinimalHandler implements CommandHandler {
      constructor(
        private readonly logger: LoggerService,
        private readonly ref: ModuleRef
      ) {}

      public async run(): Promise<void> {
        this.logger.info('minimal')

        missing = [TaskManager, ParserService, ConfigLoaderService, FileSystemService, LogoService, ValidatorService]
          .filter((type) => {
            try {
              this.ref.get(type, { strict: false })

              return false
            } catch {
              return true
            }
          })
          .map((type) => type.name)
      }
    }

    @Module({ providers: [MinimalHandler] })
    class MinimalModule {}

    const { stdout, stderr, error } = await run(greet(MinimalModule, MinimalHandler))

    expect(error).toBeUndefined()
    expect(stdout).toBe('› minimal\n')
    expect(stderr).toBe('')
    expect(missing).toEqual(['TaskManager', 'ParserService', 'ConfigLoaderService', 'FileSystemService', 'LogoService', 'ValidatorService'])
  })

  it('takes the logger options from a shared module, also when the module fails to boot', async() => {
    @Injectable()
    class SharedHandler implements CommandHandler {
      constructor(private readonly logger: LoggerService) {}

      public async run(): Promise<void> {
        this.logger.info('shared')
      }
    }

    function command(stderr: LogLevels[], ...imports: Type[]): ReturnType<typeof greet> {
      @Module({ imports: [LoggerModule.forRoot({ stderr })] })
      class SharedModule {}

      @Module({ imports: [SharedModule, ...imports], providers: [SharedHandler] })
      class CommandModule {}

      return greet(CommandModule, SharedHandler)
    }

    const ran = await run(command([LogLevels.INFO]))

    expect(ran.error).toBeUndefined()
    expect(ran).toMatchObject({ stdout: '', stderr: '› shared\n' })

    const crashed = await run(command([], BrokenModule))

    expect(crashed.error.message).toBe('factory exploded')
    expect(crashed.stdout).toBe('[F] factory exploded\n')
    expect(crashed.stderr).toBe('')
  })

  it('fails clearly when the command declares no module', async() => {
    const { error, stderr } = await run(greet(undefined))

    expect(error.message).toBe('Command greet declares no module, set "static module" to the module that provides its handler.')
    expect(stderr).toContain('[F] Command greet declares no module')
  })

  it('fails clearly when the command declares no handler', async() => {
    const { error } = await run(greet(app(), null))

    expect(error.message).toBe('Command greet declares no handler, set "static handler" to the class that runs it.')
  })

  it('logs a module boot failure with the logger options of the command module', async() => {
    const { stdout, stderr, error } = await run(greet(app({ stderr: Object.values(LogLevels), imports: [BrokenModule] })), ['--log-level', 'debug'])

    const [fatal, debug, ...stack] = stderr.trimEnd().split('\n')

    expect(error.message).toBe('factory exploded')
    expect(stdout).toBe('')
    expect([fatal, debug]).toEqual(['[F] factory exploded', '[D] Error: factory exploded'])
    expect(stack.length).toBeGreaterThan(0)
    expect(stack.every((line) => line.startsWith('[D]     at '))).toBe(true)
  })

  it('keeps a boot failure on stderr when the logger options come from a factory', async() => {
    @Module({
      imports: [LoggerModule.forRootAsync({ inject: [TOKEN_COMMAND_FLAGS], useFactory: () => ({ stderr: Object.values(LogLevels) }) }), BrokenModule]
    })
    class AsyncModule {}

    const { stdout, stderr } = await run(greet(AsyncModule), ['--log-level', 'debug'])

    expect(stdout).toBe('')
    expect(stderr).toContain('[F] factory exploded')
    expect(stderr).toContain('[D] Error: factory exploded')
  })

  it('closes the application when the handler fails', async() => {
    const destroyed = vi.fn()

    @Injectable()
    class Resource implements OnModuleDestroy {
      public onModuleDestroy(): void {
        destroyed()
      }
    }

    @Injectable()
    class FailingHandler implements CommandHandler {
      public async run(): Promise<void> {
        throw new Error('run failed')
      }
    }

    const { error } = await run(greet(app({ providers: [Resource, FailingHandler] }), FailingHandler))

    expect(error.message).toBe('run failed')
    expect(destroyed).toHaveBeenCalledOnce()
  })

  it('removes its signal listeners once the command ends', async() => {
    const signals = ['SIGINT', 'SIGTERM'] as const
    const before = signals.map((signal) => process.listenerCount(signal))
    let during: number[]

    @Injectable()
    class SignalHandler implements CommandHandler {
      public async run(): Promise<void> {
        during = signals.map((signal) => process.listenerCount(signal))

        throw new Error('run failed')
      }
    }

    await run(greet(app({ providers: [SignalHandler] }), SignalHandler))

    expect(during).toEqual(before.map((count) => count + 1))
    expect(signals.map((signal) => process.listenerCount(signal))).toEqual(before)

    await run(greet(app()))

    expect(signals.map((signal) => process.listenerCount(signal))).toEqual(before)
  })

  it('reports an unknown flag through the fallback logger', async() => {
    const { stdout, stderr, error } = await run(greet(app({ stderr: Object.values(LogLevels) })), ['--nope'])

    expect(error.message).toContain('Nonexistent flag: --nope')
    expect(stdout).toBe('')
    expect(stderr).toContain('[F] Nonexistent flag: --nope')
  })
})
