import type { INestApplicationContext } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import type { CliModuleImport, CliRuntimeOptions } from './cli.interface'
import { CommandModule } from './command'
import { ConfigModule } from './config'
import { LogLevels, LoggerModule, LoggerService } from './logger'
import { NestLogger } from './logger/nest-logger.service'
import { isNestLogging } from '@utils'

export class CliFactory {
  /** Boots a command module with the runtime modules: the config, the running command and the logger. */
  public static create(module: CliModuleImport, { config, ...command }: CliRuntimeOptions): Promise<INestApplicationContext> {
    return NestFactory.createApplicationContext(
      { ...ConfigModule.forRoot({ config }), imports: [CommandModule.forRoot(command), LoggerModule, module] },
      {
        // before the logger of the command exists, nest logs through one with the parsed level that keeps everything on stderr
        logger: isNestLogging() ? new NestLogger(new LoggerService({ config }, { stderr: Object.values(LogLevels) })) : false,
        abortOnError: false
      }
    )
  }

  /** Boots only the runtime modules for a command that failed before its own module did, writing every level to stderr, away from the command output. */
  public static createFallback(options: CliRuntimeOptions): Promise<INestApplicationContext> {
    return CliFactory.create(LoggerModule.forRoot({ stderr: Object.values(LogLevels) }), options)
  }
}
