import { Command as BaseCommand } from '@oclif/core'
import type { ListrContext, PromptOptions } from 'listr2'
import { createPrompt, Manager } from 'listr2'
import { createInterface } from 'readline'
import 'reflect-metadata'

import { FileSystemService, ConfigService, ValidatorService } from '@lib'
import { BaseConfig } from '@lib/config/config.interface'
import { ParserService } from '@lib/parser/parser.service'
import { isDebug, isSilent } from '@utils'
import { Logger } from '@utils/logger'

export class Command<Ctx extends ListrContext = ListrContext, Config extends BaseConfig = BaseConfig> extends BaseCommand {
  public logger: Logger
  public tasks: Manager<Ctx, 'default'>
  public validator: ValidatorService
  public isSilent: boolean
  public isDebug: boolean
  public cs: ConfigService<Config>
  public parser: ParserService
  public fs: FileSystemService

  /** Every command needs to implement run for running the command itself. */
  // make run non-abstract for other classes
  public async run (): Promise<void> {
    throw new Error('This is the default output. This should not be here. Please define run() inside the extended command class.')
  }

  /** Initial functions / constructor */
  // can not override constructor, init function is defined by oclif
  public async init (): Promise<void> {
    this.cs = new ConfigService(this)

    this.isSilent = isSilent(this.cs.config)
    this.isDebug = isDebug(this.cs.config)

    this.logger = new Logger(this.cs.command.id ? this.cs.command.id : this.cs.command.name, { level: this.cs.config.loglevel })

    this.parser = new ParserService()
    this.fs = new FileSystemService()

    this.greet()

    this.validator = new ValidatorService()

    await this.validator.validate(BaseConfig, this.cs.config)

    // initiate manager
    this.tasks = new Manager({
      rendererFallback: this.isDebug,
      rendererSilent: this.isSilent,
      nonTTYRendererOptions: { logEmptyTitle: false, logTitleChange: false }
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

  private greet (): void {
    if (this.isSilent) {
      return
    }

    const logo = `${this.cs.oclif.name} v${this.cs.oclif.version}`

    // eslint-disable-next-line no-console
    this.logger.direct(logo)
    // eslint-disable-next-line no-console
    this.logger.direct('-'.repeat(logo.length))
  }
}
