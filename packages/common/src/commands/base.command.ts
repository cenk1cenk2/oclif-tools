import { Command as BaseCommand } from '@oclif/core'
import type { ListrContext, PromptOptions } from 'listr2'
import { createPrompt, Manager } from 'listr2'
import { createInterface } from 'readline'

import 'reflect-metadata'

import { CLI_FLAGS } from '@constants'
import type { FlagInput, InferArgs, InferFlags } from '@interfaces'
import { ConfigService, FileSystemService, StoreService, ValidatorService } from '@lib'
import { ParserService } from '@lib/parser/parser.service'
import type { SetCtxAssignOptions, SetCtxDefaultsOptions } from '@utils'
import { CliUx, setCtxAssign, setCtxDefaults } from '@utils'
import { ListrLogger, LogFieldStatus, Logger } from '@utils/logger'

export class Command<
  Ctx extends ListrContext = ListrContext,
  Flags extends Record<PropertyKey, any> = InferFlags<typeof Command>,
  Args extends Record<PropertyKey, any> = InferArgs<typeof Command>,
  Store extends Record<PropertyKey, any> = Record<PropertyKey, any>
> extends BaseCommand {
  static get globalFlags (): FlagInput {
    // eslint-disable-next-line no-underscore-dangle
    return { ...CLI_FLAGS, ...this._globalFlags }
  }

  static set globalFlags (flags: FlagInput) {
    // eslint-disable-next-line no-underscore-dangle
    this._globalFlags = Object.assign({}, this.globalFlags, flags)
    this.flags = {} // force the flags setter to run
  }

  public logger: Logger
  public tasks: Manager<Ctx, 'default' | 'verbose' | 'silent' | 'simple'>
  public validator: ValidatorService
  public cs: ConfigService
  public parser: ParserService
  public fs: FileSystemService
  public store: StoreService<Store>

  public flags: Flags = {} as Flags
  public args: Args = {} as Args

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

  // make run non-abstract for other classes
  public run (): Promise<any> {
    throw new Error('The command should have a run function to do something!')
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public async _run<T>(): Promise<T | undefined> {
    let result: T

    try {
      // remove redirected env var to allow subsessions to run autoupdated client
      delete process.env[this.config.scopedEnvVarKey('REDIRECTED')]
      await this.init()
      result = await this.run()
      await this.finally()
    } catch (error) {
      await this.catch(error, 127)
    }

    if (result && this.jsonEnabled()) {
      CliUx.ux.styledJSON(this.toSuccessJson(result))
    }

    return result
  }

  public exit (code?: number): void {
    this.logger.trace('Code -> %d', code, { status: LogFieldStatus.EXIT })

    process.exit(code ?? 0)
  }

  /** Run all tasks from task manager. */
  public runTasks<C extends Ctx = Ctx>(): Promise<C> {
    return this.tasks.runAll<C>()
  }

  /** Gets prompt from user. */
  public prompt<T = any>(options: PromptOptions): Promise<T> {
    return createPrompt(options, {
      error: true,
      stdout: process.stdout
    })
  }

  protected setCtxDefaults<T extends Ctx = Ctx>(...defaults: SetCtxDefaultsOptions<T>[]): void {
    setCtxDefaults(this.tasks.options.ctx, ...defaults)

    this.logger.trace('Updated context with defaults: %o', this.tasks.options.ctx, { status: 'ctx' })
  }

  protected setCtxAssign<K = Record<PropertyKey, any>>(...assigns: SetCtxAssignOptions<K>[]): void {
    setCtxAssign(this.tasks.options.ctx, ...assigns)

    this.logger.trace('Updated context with assign: %o', this.tasks.options.ctx, { status: 'ctx' })
  }

  /** Initial functions / constructor */
  // can not override constructor, init function is defined by oclif
  protected async init (): Promise<void> {
    await super.init()
    // do the initialization first then go ahead and throw if required
    let err: Error

    try {
      const { flags, args } = await this.parse()

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

    const context = this.cs.command.id ? this.cs.command.id : this.cs.command.name

    this.logger = new Logger(null, { level: this.cs.logLevel })

    this.store = new StoreService<Store>()

    this.greet()

    if (err) {
      throw err
    }

    this.logger.stage('Initiating services.')

    this.parser = new ParserService()
    this.fs = new FileSystemService()
    this.validator = new ValidatorService()

    // initiate manager
    this.tasks = new Manager({
      rendererFallback: this.cs.isDebug,
      rendererSilent: this.cs.isSilent,
      nonTTYRendererOptions: {
        logEmptyTitle: false,
        logTitleChange: false,
        logger: ListrLogger,
        options: [ context ]
      },
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

    const terminate = (): never => {
      // show that we have understood that
      this.logger.fatal('Caught terminate signal.', { status: LogFieldStatus.TERMINATE })

      process.exit(1)
    }

    process.on('SIGINT', terminate)
    process.on('SIGTERM', terminate)

    this.logger.stage('Running shouldRunBefore.')
    await this.shouldRunBefore()
    this.logger.stage('Finished shouldRunBefore.')
  }

  /** Tasks to run before end of the command. */
  protected async finally<C extends Ctx = Ctx>(): Promise<{ ctx: C }> {
    // run anything in the task queue at the end
    this.logger.stage('Running tasks.')
    const ctx = await this.runTasks<C>()

    this.logger.stage('Finished tasks.')

    this.logger.stage('Running shouldRunAfter.')
    await this.shouldRunAfter(ctx)
    this.logger.stage('Finished shouldRunAfter.')

    return { ctx }
  }

  /** Catch any error occurred during command. */
  // catch all those errors, not verbose
  protected catch (e: Error, exit?: number): Promise<void> {
    // log the error
    this.logger.fatal(e.message)
    this.logger.debug(e.stack, { context: 'crash' })

    if (exit > 0) {
      this.exit(exit)
    }

    return
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
}
