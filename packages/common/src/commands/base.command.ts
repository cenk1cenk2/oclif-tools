import { Command as BaseCommand, Flags } from '@oclif/core'
import type { ListrContext, PromptOptions } from 'listr2'
import { createPrompt, Manager } from 'listr2'
import { createInterface } from 'readline'
import 'reflect-metadata'

import { HelpGroups } from '@constants'
import type { ArgInput, InferArgs, InferFlags } from '@interfaces'
import { ConfigService, FileSystemService, StoreService, ValidatorService } from '@lib'
import { ParserService } from '@lib/parser/parser.service'
import type { SetCtxAssignOptions, SetCtxDefaultsOptions } from '@utils'
import { setCtxAssign, setCtxDefaults } from '@utils'
import { Logger, LogLevels } from '@utils/logger'

export abstract class Command<
  Ctx extends ListrContext = ListrContext,
  Flags extends Record<PropertyKey, any> = InferFlags<typeof Command>,
  Args extends Record<PropertyKey, any> = InferArgs<typeof Command>,
  Store extends Record<PropertyKey, any> = Record<PropertyKey, any>
> extends BaseCommand {
  static globalFlags = {
    ['log-level']: Flags.enum({
      default: LogLevels.INFO,
      env: 'LOG_LEVEL',
      description: 'Set the log level of the application.',
      options: [ ...Object.values(LogLevels), ...Object.values(LogLevels).map((level) => level.toLowerCase()) ],
      helpGroup: HelpGroups.CLI,
      parse: async (input) => (input as string)?.toUpperCase() as unknown as LogLevels
    }),
    ci: Flags.boolean({
      default: false,
      env: 'CI',
      description: 'Instruct whether this is running the CI/CD configuration.',
      helpGroup: HelpGroups.CLI
    })
  }

  static args: ArgInput = []

  public logger: Logger
  public tasks: Manager<Ctx, 'default'>
  public validator: ValidatorService
  public cs: ConfigService
  public parser: ParserService
  public fs: FileSystemService
  public store: StoreService<Store> = new StoreService()

  public flags: Flags = {} as Flags
  public args: Args = {} as Args

  /** Initial functions / constructor */
  // can not override constructor, init function is defined by oclif
  public async init (): Promise<void> {
    // do the initialization first then go ahead and throw if required
    let err: Error

    try {
      const { flags, args } = await this.parse(this.ctor)

      this.flags = flags as unknown as Flags
      this.args = args as unknown as Args
    } catch (e) {
      err = e
    }

    this.cs = new ConfigService(this.config, this.ctor, {
      logLevel: this.flags['log-level'],
      ci: this.flags.ci,
      json: this.flags.json
    })

    this.logger = new Logger(this.cs.command.id ? this.cs.command.id : this.cs.command.name, { level: this.cs.logLevel })

    this.greet()

    if (err) {
      throw err
    }

    this.parser = new ParserService()
    this.fs = new FileSystemService()
    this.validator = new ValidatorService()

    // initiate manager
    this.tasks = new Manager({
      rendererFallback: this.cs.isDebug,
      rendererSilent: this.cs.isSilent,
      nonTTYRendererOptions: { logEmptyTitle: false, logTitleChange: false },
      ctx: {} as Ctx
    })

    // graceful terminate
    if (this.cs.oclif.windows) {
      createInterface({
        input: process.stdin,
        output: process.stdout
      }).on('SIGINT', () => {
        process.kill(process.pid, 'SIGINT')
      })
    }

    process.on('SIGINT', () => {
      // show that we have understood that
      this.logger.fatal('Caught terminate signal.', { context: 'exit' })

      process.exit(1)
    })

    await this.shouldRunBefore()
  }

  /**
   * Construct the class if you dont want to extend init or constructor.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public shouldRunBefore (): void | Promise<void> {}

  /**
   * Deconstruct the class if you dont want to extend finally or catch.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public shouldRunAfter (_ctx?: Ctx): void | Promise<void> {}

  /** Run all tasks from task manager. */
  public async runTasks<C extends Ctx = Ctx>(): Promise<C> {
    try {
      const ctx = await this.tasks.runAll<C>()

      return ctx
    } catch (e) {
      this.logger.fatal(e.message)
      this.logger.debug(e.stack, { context: 'crash' })
      process.exit(126)
    }
  }

  /** Tasks to run before end of the command. */
  public async finally<C extends Ctx = Ctx>(): Promise<{ ctx: C }> {
    // run anything in the task queue at the end
    const ctx = await this.runTasks<C>()

    await this.shouldRunAfter(ctx)

    return { ctx }
  }

  /** Catch any error occurred during command. */
  // catch all those errors, not verbose
  public catch (e: Error): Promise<void> {
    // log the error
    this.logger.fatal(e.message)
    this.logger.debug(e.stack, { context: 'crash' })

    process.exit(127)
  }

  /** Gets prompt from user. */
  public prompt<T = any>(options: PromptOptions): Promise<T> {
    try {
      return createPrompt(options, {
        stdout: process.stdout,
        cancelCallback: () => {
          throw new Error('Cancelled prompt.')
        }
      })
    } catch (e) {
      this.logger.fatal('There was a problem getting the answer of the last question.')

      throw e
    }
  }

  public setCtxDefaults (...defaults: SetCtxDefaultsOptions<Ctx>[]): void {
    return setCtxDefaults(this.tasks.options.ctx, ...defaults)
  }

  public setCtxAssign<K = Record<PropertyKey, any>>(...assigns: SetCtxAssignOptions<K>[]): void {
    return setCtxAssign(this.tasks.options.ctx, ...assigns)
  }

  public exit (code?: number): void {
    this.logger.trace('Exitting with code: %d', code)
    process.exit(code ?? 0)
  }

  private greet (): void {
    if (this.cs.isSilent || this.cs.json) {
      return
    }

    const logo = this.store.get('logo') ?? `${this.cs.oclif.name} v${this.cs.oclif.version}`

    this.logger.direct(logo)

    if (!this.store.has('logo')) {
      this.logger.direct('-'.repeat(logo.length))
    }
  }

  /** Every command needs to implement run for running the command itself. */
  // make run non-abstract for other classes
  public abstract run (): Promise<void>
}
