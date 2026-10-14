import type { DynamicModule, OnModuleDestroy, Provider, Type } from '@nestjs/common'
import { ConfigurableModuleBuilder, Inject, Injectable, Module, Scope, forwardRef } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import type { StandardSchemaV1 } from '@standard-schema/spec'
import { join } from 'path'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { z } from 'zod'

import type { CliModuleImport, CommandHandler, UseHandlerOptions } from '../src'
import {
  Args,
  CliFactory,
  CommandContext,
  Command,
  ConfigService,
  FileSystemService,
  Flags,
  LogLevels,
  LoggerModule,
  LoggerService,
  LogoModule,
  LogoService,
  ParserModule,
  ParserService,
  TaskManager,
  TaskModule,
  UseHandler,
  ValidatorService,
  YamlParser
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
          inject: [CommandContext],
          useFactory: (context: CommandContext) => ({ name: context.flags.name })
        }),
        ...(options.imports ?? [])
      ],
      providers: options.providers ?? [GreetHandler]
    })
    class AppModule {}

    return AppModule
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function greet(module?: CliModuleImport, handler: Type<CommandHandler<any>> = GreetHandler, schema?: StandardSchemaV1) {
    class Greet extends Command {
      static flags = {
        name: Flags.string({ default: 'world' }),
        loud: Flags.boolean({ default: false }),
        times: Flags.integer({ default: 1 })
      }

      static args = {
        person: Args.string()
      }
    }

    if (module) {
      // the handlers of these tests take any input, which the schema check of the decorator can not tell apart
      UseHandler({
        module,
        handler,
        schema
      } as UseHandlerOptions<CommandHandler<any>, undefined>)(Greet)
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
    let input: CommandContext

    @Injectable()
    class InputHandler implements CommandHandler {
      public async run(received: CommandContext): Promise<void> {
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

  describe('with a schema', () => {
    const schema = z.object({
      flags: z
        .object({
          name: z.string().transform((name) => name.toUpperCase()),
          loud: z.boolean(),
          times: z.number()
        })
        .refine((flags) => !flags.loud || flags.times > 1, { message: '--loud needs --times above 1' }),
      args: z.object({ person: z.string().optional() })
    })

    it('hands the output of the schema to the module factories and the handler', async() => {
      let input: unknown
      let injected: unknown

      @Injectable()
      class SchemaHandler {
        constructor(
          private readonly greet: GreetService,
          private readonly context: CommandContext<typeof schema>
        ) {}

        public async run(received: CommandContext<typeof schema>): Promise<void> {
          input = { flags: received.flags, args: received.args }
          injected = { flags: this.context.flags, args: this.context.args }

          process.stdout.write(this.greet.hello() + '\n')
        }
      }

      const { stdout, error } = await run(greet(app({ providers: [SchemaHandler] }), SchemaHandler, schema), ['--name', 'schema', '--log-level', 'debug'])

      expect(error).toBeUndefined()
      expect(stdout).toContain('hello SCHEMA')
      expect(input).toEqual({
        flags: {
          name: 'SCHEMA',
          loud: false,
          times: 1
        },
        args: {}
      })
      expect(injected).toEqual(input)
    })

    it('fails a rejected input like a flag error before the command boots', async() => {
      const module = app()
      const created = vi.spyOn(CliFactory, 'create')
      const { error, stderr } = await run(greet(module, GreetHandler, schema), ['--loud'])

      expect(created.mock.calls.map(([booted]) => booted)).not.toContain(module)
      created.mockRestore()
      expect(error).toMatchObject({ message: 'flags: --loud needs --times above 1', oclif: { exit: 2 } })
      expect(stderr.split('\n').filter((line) => line.startsWith('[F]'))).toEqual(['[F] flags: --loud needs --times above 1'])
    })
  })

  it('feeds parsed flags into module factories', async() => {
    const { stdout } = await run(greet(app()), ['--name', 'flags'])

    expect(stdout).toContain('hello flags')
  })

  it('provides one command context to providers, factories and the run of the handler', async() => {
    let seen: unknown[]

    @Injectable()
    class ContextService {
      constructor(public readonly context: CommandContext) {}
    }

    @Injectable()
    class ContextHandler implements CommandHandler {
      constructor(
        private readonly service: ContextService,
        private readonly cs: ConfigService,
        private readonly greet: GreetService
      ) {}

      public async run(context: CommandContext): Promise<void> {
        seen = [context, this.service.context, this.greet.hello(), this.cs.config]
      }
    }

    const Context = greet(app({ providers: [ContextService, ContextHandler] }), ContextHandler)
    const { error } = await run(Context, ['--name', 'context'])
    const [received, injected, hello, config] = seen as [CommandContext, CommandContext, string, unknown]

    expect(error).toBeUndefined()
    expect(injected).toBe(received)
    expect(hello).toBe('hello context')
    expect(received).toMatchObject({
      id: 'greet',
      command: Context,
      flags: { name: 'context' },
      oclif: expect.objectContaining({ name: '@cenk1cenk2/oclif-common' })
    })
    expect(received.signal).toBeInstanceOf(AbortSignal)
    expect(config).toEqual({ logLevel: LogLevels.INFO, isJson: false })
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

  it('configures the parsers through a factory without handing out the filesystem', async() => {
    let parsed: unknown
    let fs: unknown

    @Injectable()
    class ParseHandler implements CommandHandler {
      constructor(
        private readonly parser: ParserService,
        private readonly ref: ModuleRef
      ) {}

      public async run(): Promise<void> {
        parsed = this.parser.parse('rc.yaml', 'name: parsed')

        try {
          fs = this.ref.get(FileSystemService)
        } catch {
          fs = undefined
        }
      }
    }

    const { error } = await run(greet(app({ providers: [ParseHandler], imports: [ParserModule.forRootAsync({ useFactory: () => ({ parsers: [YamlParser] }) })] }), ParseHandler))

    expect(error).toBeUndefined()
    expect(parsed).toEqual({ name: 'parsed' })
    expect(fs).toBeUndefined()
  })

  it('takes a promise of a module or a forward reference as the module', async() => {
    @Module({ imports: [LoggerModule.forRoot(), GreetModule.forRoot({ name: 'later' })], providers: [GreetHandler] })
    class LaterModule {}

    expect(await run(greet(Promise.resolve({ module: LaterModule })))).toMatchObject({ stdout: '› hello later\n' })
    expect(await run(greet(forwardRef(() => LaterModule)))).toMatchObject({ stdout: '› hello later\n' })
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

        missing = [TaskManager, ParserService, FileSystemService, LogoService, ValidatorService]
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
    expect(missing).toEqual(['TaskManager', 'ParserService', 'FileSystemService', 'LogoService', 'ValidatorService'])
  })

  describe('logger options', () => {
    @Injectable()
    class LogHandler implements CommandHandler {
      constructor(private readonly logger: LoggerService) {}

      public async run(): Promise<void> {
        this.logger.info('logged')
      }
    }

    function command(...imports: (Type | DynamicModule)[]): ReturnType<typeof greet> {
      @Module({ imports, providers: [LogHandler] })
      class CommandModule {}

      return greet(CommandModule, LogHandler)
    }

    it('takes them from a shared module, also when more modules share it', async() => {
      @Module({ imports: [LoggerModule.forRoot({ stderr: [LogLevels.INFO] })] })
      class SharedModule {}

      @Module({ imports: [SharedModule] })
      class OtherModule {}

      const { stdout, stderr, error } = await run(command(SharedModule, OtherModule))

      expect(error).toBeUndefined()
      expect({ stdout, stderr }).toEqual({ stdout: '', stderr: '› logged\n' })
    })

    it('takes them from a factory', async() => {
      const loud = command(
        LoggerModule.forRootAsync({ inject: [CommandContext], useFactory: (context: CommandContext) => ({ stderr: context.flags.loud ? [LogLevels.INFO] : [] }) })
      )

      expect(await run(loud, ['--loud'])).toMatchObject({ stdout: '', stderr: '› logged\n' })
      expect(await run(loud)).toMatchObject({ stdout: '› logged\n', stderr: '' })
    })

    it('lets nest log its bootstrap through the logger only with NEST_LOGS', async() => {
      vi.stubEnv('NEST_LOGS', '1')

      const on = await run(command(), ['--log-level', 'verbose'])

      vi.unstubAllEnvs()

      const off = await run(command(), ['--log-level', 'trace'])

      expect(on.stderr).toContain('[V] [InstanceLoader] CommandModule dependencies initialized')
      expect(on.stdout + on.stderr).not.toContain('[Nest]')
      expect(off.stdout + off.stderr).not.toContain('dependencies initialized')
    })
  })

  it('fails clearly when the command has no handler', async() => {
    const { error, stderr } = await run(greet())

    expect(error.message).toBe('Command greet has no handler, decorate it with @UseHandler({ module, handler }).')
    expect(stderr).toContain('[F] Command greet has no handler')
  })

  it('passes on an error of the handler construction unchanged', async() => {
    @Injectable({ scope: Scope.TRANSIENT })
    class Exploding {
      constructor() {
        throw new Error('dependency exploded')
      }
    }

    @Injectable({ scope: Scope.TRANSIENT })
    class ExplodingHandler implements CommandHandler {
      constructor(private readonly exploding: Exploding) {}

      public async run(): Promise<void> {}
    }

    const { error } = await run(greet(app({ providers: [Exploding, ExplodingHandler] }), ExplodingHandler))

    expect(error.message).toBe('dependency exploded')
  })

  it('logs a module boot failure to stderr whatever the logger options', async() => {
    const { stdout, stderr, error } = await run(greet(app({ stderr: [], imports: [BrokenModule] })), ['--log-level', 'debug'])

    const [fatal, debug, ...stack] = stderr.trimEnd().split('\n')

    expect(error.message).toBe('factory exploded')
    expect(stdout).toBe('')
    expect([fatal, debug]).toEqual(['[F] factory exploded', '[D] [crash] Error: factory exploded'])
    expect(stack.length).toBeGreaterThan(0)
    expect(stack.every((line) => line.startsWith('[D] [crash]     at '))).toBe(true)
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

  it('leaves the error to oclif when even the fallback can not boot', async() => {
    const fallback = vi.spyOn(CliFactory, 'createFallback').mockRejectedValue(new Error('fallback exploded'))

    const { error } = await run(greet(app()), ['--nope'])

    fallback.mockRestore()

    expect(error.message).toContain('Nonexistent flag: --nope')
    expect((error as Error & { skipOclifErrorHandling?: boolean }).skipOclifErrorHandling).toBeFalsy()
  })

  it('reports an unknown flag through the fallback logger', async() => {
    const { stdout, stderr, error } = await run(greet(app({ stderr: Object.values(LogLevels) })), ['--nope'])

    expect(error.message).toContain('Nonexistent flag: --nope')
    expect(error).toMatchObject({ skipOclifErrorHandling: true, oclif: { exit: 2 } })
    expect(stdout).toBe('')
    expect(stderr).toContain('[F] Nonexistent flag: --nope')
  })
})
