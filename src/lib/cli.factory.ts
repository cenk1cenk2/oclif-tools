import type { INestApplicationContext, LogLevel } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import type { CliModuleImport, CliRuntimeOptions } from './cli.interface'
import { CommandModule } from './command'
import { ConfigModule } from './config'
import { LogLevels, LoggerModule, NEST_LOG_LEVELS } from './logger'
import { NestBootstrapLogger } from './logger/nest-bootstrap-logger'

export class CliFactory {
  /** Boots a command module with the runtime modules: the config, the running command and the logger. */
  public static create(module: CliModuleImport, { config, ...command }: CliRuntimeOptions): Promise<INestApplicationContext> {
    const levels = Object.values(LogLevels)

    return NestFactory.createApplicationContext(
      { ...ConfigModule.forRoot({ config }), imports: [CommandModule.forRoot(command), LoggerModule, module] },
      {
        // a logger instance replaces the process-wide one of nest, where a level list would only reconfigure it, even when it is the logger of a closed application
        logger: new NestBootstrapLogger({
          logLevels: config.isJson ? [] : (Object.keys(NEST_LOG_LEVELS) as LogLevel[]).filter((level) => levels.indexOf(NEST_LOG_LEVELS[level]) <= levels.indexOf(config.logLevel))
        }),
        abortOnError: false
      }
    )
  }

  /** Boots only the runtime modules for a command that failed before its own module did, writing every level to stderr, away from the command output. */
  public static createFallback(options: CliRuntimeOptions): Promise<INestApplicationContext> {
    return CliFactory.create(LoggerModule.forRoot({ stderr: Object.values(LogLevels) }), options)
  }
}
