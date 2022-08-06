import { Command as BaseCommand } from '@oclif/core'
import type { ListrContext } from 'listr2'
import { Manager } from 'listr2'

import { ConfigService, ValidatorService } from '@lib'
import type { BaseConfig } from '@lib/config/config.interface'
import { Logger, LogLevels } from '@utils/logger'

export class Command<Ctx extends ListrContext = ListrContext, Config extends BaseConfig = BaseConfig> extends BaseCommand {
  public logger: Logger
  public tasks: Manager<Ctx, 'default'>
  public validator: ValidatorService
  public cs: ConfigService<Config>

  /** Every command needs to implement run for running the command itself. */
  // make run non-abstract for other classes
  public async run (): Promise<void> {
    throw new Error('This is the default output. This should not be here. Please define run() inside the extended command class.')
  }

  /** Initial functions / constructor */
  // can not override constructor, init function is defined by oclif
  public async init (): Promise<void> {
    this.cs = new ConfigService(this)

    this.logger = new Logger(this.cs.command.id ? this.cs.command.id : this.cs.command.name, { level: this.cs.config.loglevel })

    this.validator = new ValidatorService(this.logger)

    // initiate manager
    this.tasks = new Manager({
      rendererFallback: this.cs.config?.loglevel === LogLevels.DEBUG,
      rendererSilent: this.cs.config?.loglevel === LogLevels.SILENT,
      nonTTYRendererOptions: { logEmptyTitle: false, logTitleChange: false }
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public shouldRunAfter (): void | Promise<void> {}

  /** Run all tasks from task manager. */
  public async runTasks (): Promise<Ctx> {
    try {
      const ctx = await this.tasks.runAll<Ctx>()

      return ctx
    } catch (e) {
      this.logger.fatal(e.message)
      this.logger.debug(e.stack, { context: 'crash' })
      process.exit(126)
    }
  }

  /** Tasks to run before end of the command. */
  public async finally (): Promise<{ ctx: Ctx }> {
    // run anything in the task queue at the end
    const ctx = await this.runTasks()

    await this.shouldRunAfter()

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
}
