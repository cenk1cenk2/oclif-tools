import type { INestApplicationContext } from '@nestjs/common'
import { UnknownElementException } from '@nestjs/core/internal'
import { Command as BaseCommand, Errors, Flags } from '@oclif/core'
import { constants } from 'os'
import { createInterface } from 'readline'

import { TOKEN_USE_HANDLER } from './base.command.constants'
import type { CommandHandler, CommandInput, UseHandlerOptions } from './base.command.interface'
import { HelpGroups } from '@constants'
import type { CliRuntimeOptions } from '@lib'
import { LogLevels, LoggerService } from '@lib'
import { CliFactory } from '@lib/cli.factory'
import { NestLogger } from '@lib/logger/nest-logger.service'
import { validate } from '@lib/validator/validate'
import { ValidationError } from '@lib/validator/validator.error'
import { isNestLogging } from '@utils'

export abstract class Command extends BaseCommand {
  static baseFlags = {
    ['log-level']: Flags.custom<LogLevels>({
      default: LogLevels.INFO,
      env: 'LOG_LEVEL',
      description: 'Set the log level of the application.',
      options: Object.values(LogLevels).map((level) => level.toLowerCase()),
      helpGroup: HelpGroups.CLI,
      parse: async(input) => input.toUpperCase() as LogLevels
    })(),
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

  /** the signals that stop the command, which a command can override to handle others or none */
  protected readonly signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM']

  private app: INestApplicationContext
  /** the flags and args as oclif parsed them, which the runtime config reads before any schema of the command */
  private raw: Omit<CommandInput, 'signal'>
  private input: Omit<CommandInput, 'signal'>
  private interrupted: NodeJS.Signals
  private readonly abort = new AbortController()

  /** oclif runs this once the application context is up, it hands the parsed input to the handler of the command. */
  public async run(): Promise<void> {
    const { handler } = this.registration()

    let instance: CommandHandler

    try {
      instance = await this.app.resolve(handler)
    } catch(e: any) {
      if (e instanceof UnknownElementException) {
        throw new Error(`Can not run command ${this.id}, its module does not provide the handler: ${handler.name}`, { cause: e })
      }

      throw e
    }

    try {
      await instance.run({ ...this.input, signal: this.abort.signal })
    } finally {
      if (this.interrupted) {
        this.exit(128 + constants.signals[this.interrupted])
      }
    }
  }

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

      this.raw = { flags, args }
      this.input = this.raw
    } catch(e: any) {
      err = e
    }

    if (!err && !this.registration()) {
      err = new Error(`Command ${this.id} has no handler, decorate it with @UseHandler({ module, handler }).`)
    }

    if (!err && this.registration().schema) {
      try {
        this.input = (await validate(this.registration().schema, this.raw)) as Omit<CommandInput, 'signal'>
      } catch(e: any) {
        // a rejected input fails like a flag oclif can not parse
        err = e instanceof ValidationError ? new Errors.CLIError(e.describe()) : e
      }
    }

    // factories of the command module read the parsed flags, so a failed parse boots without them
    // a fallback that can not boot either leaves the original error to catch
    this.app = err ? await CliFactory.createFallback(this.options()).catch(() => Promise.reject(err)) : await CliFactory.create(this.registration().module, this.options())

    if (isNestLogging()) {
      this.app.useLogger(this.app.get(NestLogger))
    }

    for (const signal of this.signals) {
      process.on(signal, this.interrupt)
    }

    if (err) {
      throw err
    }

    const logger = await this.app.resolve(LoggerService)

    logger.stage('Created application context.')

    // a windows terminal delivers ctrl+c to stdin instead of raising the signal on the process
    if (this.config.windows) {
      createInterface({
        input: process.stdin,
        output: process.stdout
      }).on('SIGINT', () => {
        process.kill(process.pid, 'SIGINT')
      })
    }
  }

  protected async finally(): Promise<void> {
    await this.app?.close()

    for (const signal of this.signals) {
      process.off(signal, this.interrupt)
    }
  }

  /** Catch any error occurred during command. */
  protected async catch(err: Error): Promise<never> {
    if (err instanceof Errors.ExitError) {
      throw err
    }

    process.exitCode = process.exitCode ?? (err as any).exitCode ?? 1

    let logger: LoggerService

    try {
      this.app ??= await CliFactory.createFallback(this.options())
      logger = await this.app.resolve(LoggerService)
    } catch {
      // without a logger the error handler of oclif prints the error of the command
      throw err
    }

    logger.fatal(err.message)
    logger.debug(err.stack, { context: 'crash' })

    // logged above already, so the error handler of oclif only exits with its code
    throw Object.assign(err, { skipOclifErrorHandling: true })
  }

  private registration(): UseHandlerOptions | undefined {
    return Reflect.getMetadata(TOKEN_USE_HANDLER, this.ctor)
  }

  private options(): CliRuntimeOptions {
    return {
      oclif: this.config,
      command: this.ctor,
      config: {
        logLevel: this.raw?.flags['log-level'] ?? LogLevels.INFO,
        isJson: this.raw?.flags.json ?? false
      },
      flags: this.input?.flags,
      args: this.input?.args
    }
  }

  /** The first signal lets the handler finish or stop through its abort signal before the application closes, a second one exits at once. */
  private readonly interrupt = (signal: NodeJS.Signals): void => {
    if (this.interrupted) {
      process.exit(128 + constants.signals[signal])
    }

    this.interrupted = signal
    this.abort.abort(signal)

    void this.app.resolve(LoggerService).then((logger) => logger.warn('Received %s, stopping the command, send it again to exit at once.', signal))
  }
}
