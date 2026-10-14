import type { DynamicModule, INestApplicationContext, Type } from '@nestjs/common'
import { Command as BaseCommand, Flags } from '@oclif/core'
import { createInterface } from 'readline'

import type { CommandHandler, CommandInput } from './base.command.interface'
import { HelpGroups } from '@constants'
import type { CliRuntimeOptions } from '@lib'
import { LogLevels, LoggerService, LogoService } from '@lib'
import { CliModule } from '@lib/cli.module'
import { NestLogger } from '@lib/logger/nest-logger.service'

import 'reflect-metadata'

export abstract class Command extends BaseCommand {
  static module: Type | DynamicModule = CliModule.forRoot()
  static handler: Type<CommandHandler<any>>

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

  private app: INestApplicationContext
  private input: CommandInput

  /** oclif runs this once the application context is up, it hands the parsed input to the handler of the command. */
  public async run(): Promise<void> {
    const { handler } = this.ctor as typeof Command

    if (!handler) {
      throw new Error(`Command ${this.id} declares no handler, set "static handler" to the class that runs it.`)
    }

    let instance: CommandHandler

    try {
      instance = await this.app.resolve(handler)
    } catch(e: any) {
      throw new Error(`Can not run command ${this.id}, its module does not provide the handler: ${handler.name}`, { cause: e })
    }

    await instance.run(this.input)
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

      this.input = { flags, args }
    } catch(e: any) {
      err = e
    }

    // factories of the command module read the parsed flags, so a failed parse boots without them
    this.app = await CliModule.create(err ? await this.fallback() : (this.ctor as typeof Command).module, this.options())

    await this.app.init()

    this.app.useLogger(this.app.get(NestLogger))
    this.app.enableShutdownHooks(['SIGINT', 'SIGTERM'])

    this.app.get(LogoService).generate()

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
  }

  /** Catch any error occurred during command. */
  protected async catch(err: Error): Promise<never> {
    process.exitCode = process.exitCode ?? (err as any).exitCode ?? 1

    this.app ??= await CliModule.create(await this.fallback(), this.options())

    const logger = await this.app.resolve(LoggerService)

    logger.fatal(err.message)
    logger.debug(err.stack, { context: 'crash' })

    throw err
  }

  private options(): CliRuntimeOptions {
    return {
      oclif: this.config,
      command: this.ctor,
      config: {
        logLevel: this.input?.flags['log-level'] ?? LogLevels.INFO,
        isJson: this.input?.flags.json ?? false
      },
      flags: this.input?.flags,
      args: this.input?.args
    }
  }

  private fallback(): Promise<DynamicModule> {
    return CliModule.forFallback((this.ctor as typeof Command).module, this.options())
  }
}
