import { Manager } from '@listr2/manager'
import type { DynamicModule, INestApplicationContext, InjectionToken, Type } from '@nestjs/common'
import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants.js'
import { Command as BaseCommand, Flags } from '@oclif/core'
import type { ChildProcess } from 'child_process'
import type { ListrContext, ListrTaskWrapper } from 'listr2'
import { createInterface } from 'readline'

import { HelpGroups } from '@constants'
import type { InferArgs, InferFlags } from '@interfaces'
import type { ConfigModuleOptions, PipeProcessToLoggerOptions } from '@lib'
import { ConfigService, LogFieldStatus, LogLevels, LoggerModule, LoggerService, LogoService, pipeProcessThroughListr, pipeProcessToLogger } from '@lib'
import { CliModule } from '@lib/cli.module'
import type { SetCtxAssignOptions, SetCtxDefaultsOptions } from '@utils'
import { setCtxAssign, setCtxDefaults } from '@utils'

import 'reflect-metadata'

export abstract class Command<T extends typeof BaseCommand = typeof BaseCommand, Ctx extends ListrContext = ListrContext> extends BaseCommand {
  static module: Type | DynamicModule = CliModule.forRoot()

  static baseFlags = {
    ['log-level']: Flags.string({
      default: LogLevels.INFO,
      env: 'LOG_LEVEL',
      description: 'Set the log level of the application.',
      options: Object.values(LogLevels).map((level) => level.toLowerCase()),
      helpGroup: HelpGroups.CLI,
      parse: async(input) => (input as string)?.toUpperCase() as unknown as LogLevels
    }),
    ci: Flags.boolean({
      default: false,
      hidden: true,
      env: 'CI',
      description: 'Instruct whether this is running the CI/CD configuration.',
      helpGroup: HelpGroups.CLI
    }),
    json: Flags.boolean({
      default: false,
      hidden: true,
      env: 'JSON',
      description: 'Put the CLI to respond in JSON.',
      helpGroup: HelpGroups.CLI
    })
  }
  public logger: LoggerService
  public tasks: Manager<Ctx>
  public app: INestApplicationContext

  public flags!: InferFlags<T>
  public args!: InferArgs<T>

  public exit(code?: number): never {
    this.logger.trace('Code -> %d', code, { status: LogFieldStatus.EXIT })

    super.exit(code ?? 0)
  }

  /** Run all tasks from task manager. */
  public runTasks<C extends Ctx = Ctx>(): Promise<C> {
    return this.tasks.runAll<C>()
  }

  protected setCtxDefaults<T extends Ctx = Ctx>(...defaults: SetCtxDefaultsOptions<T>[]): void {
    setCtxDefaults(this.tasks.options.ctx, ...defaults)

    this.logger.trace('Updated context with defaults: %o', this.tasks.options.ctx, { status: 'ctx' })
  }

  protected setCtxAssign<K = Record<PropertyKey, any>>(...assigns: SetCtxAssignOptions<K>[]): void {
    setCtxAssign(this.tasks.options.ctx, ...assigns)

    this.logger.trace('Updated context with assign: %o', this.tasks.options.ctx, { status: 'ctx' })
  }

  protected pipeProcessToLogger(instance: ChildProcess, options?: PipeProcessToLoggerOptions): ChildProcess {
    return pipeProcessToLogger(this.logger, instance, options)
  }

  protected pipeProcessThroughListr(instance: ChildProcess, task: ListrTaskWrapper<any, any, any>): ChildProcess {
    return pipeProcessThroughListr(task, instance)
  }

  /** Initial functions / constructor */
  // can not override constructor, init function is defined by oclif
  protected async init(): Promise<void> {
    await super.init()

    // do the initialization first then go ahead and throw if required
    let err: Error

    try {
      const { args, flags } = await this.parse({
        flags: this.ctor.flags,
        baseFlags: (super.ctor as typeof Command).baseFlags,
        enableJsonFlag: this.ctor.enableJsonFlag,
        args: this.ctor.args,
        strict: this.ctor.strict
      })

      this.flags = flags as InferFlags<T>
      this.args = args as InferArgs<T>
    } catch(e: any) {
      err = e
    }

    // factories of the command module read the parsed flags, so a failed parse boots without them
    this.app = await CliModule.create(err ? this.fallback() : (this.ctor as typeof Command).module, this.options())

    await this.app.init()

    const cs = this.app.get(ConfigService)

    this.logger = await this.app.resolve(LoggerService)

    this.app.useLogger(this.logger)

    this.app.get(LogoService).generate()

    if (err) {
      throw err
    }

    this.logger.stage('Created application context.')

    for (const { key, type } of (Reflect.getMetadata(PROPERTY_DEPS_METADATA, this.constructor) ?? []) as { key: string; type: InjectionToken }[]) {
      try {
        this[key] = await this.app.resolve(type)
      } catch(e: any) {
        throw new Error(`Can not inject property "${key}" of ${this.constructor.name}, no provider for: ${typeof type === 'function' ? type.name : String(type)}`, { cause: e })
      }
    }

    // initiate manager
    this.tasks = new Manager({
      fallbackRendererCondition: cs.isDebug,
      silentRendererCondition: cs.isSilent || cs.isJson,
      ctx: {} as Ctx
    })

    // graceful terminate
    if (cs.oclif.windows) {
      createInterface({
        input: process.stdin,
        output: process.stdout
      }).on('SIGINT', () => {
        process.kill(process.pid, 'SIGINT')
      })
    }

    const terminate = (): never => {
      // show that we have understood that
      this.logger.fatal('Caught terminate signal.', { status: LogFieldStatus.TERMINATE })

      process.exit(1)
    }

    process.on('SIGINT', terminate)
    process.on('SIGTERM', terminate)
  }

  /** Tasks to run before end of the command. */
  protected async finally<C extends Ctx = Ctx>(err: Error | undefined): Promise<{ ctx: C }> {
    let ctx: C

    if (err) {
      return { ctx }
    }

    if (this.tasks?.tasks?.length > 0) {
      // run anything in the task queue at the end
      this.logger.stage('Running tasks.')

      ctx = await this.runTasks<C>()

      this.logger.stage('Finished tasks.')
    }

    await this.app.close()

    return { ctx }
  }

  /** Catch any error occurred during command. */
  // catch all those errors, not verbose
  protected async catch(err: Error): Promise<never> {
    process.exitCode = process.exitCode ?? (err as any).exitCode ?? 1

    if (!this.logger) {
      this.app = await CliModule.create(this.fallback(), this.options())

      this.logger = await this.app.resolve(LoggerService)
    }

    this.logger.fatal(err.message)
    this.logger.debug(err.stack, { context: 'crash' })

    throw err
  }

  private options(): ConfigModuleOptions {
    return {
      oclif: this.config,
      command: this.ctor,
      config: {
        logLevel: this.flags?.['log-level'] ?? LogLevels.INFO,
        isJson: this.flags?.json ?? false
      },
      flags: this.flags,
      args: this.args
    }
  }

  private fallback(): DynamicModule {
    return CliModule.forRoot({ logger: LoggerModule.optionsOf((this.ctor as typeof Command).module) })
  }

  public abstract run(): Promise<any>
}
