import type { DynamicModule, INestApplicationContext, Type } from '@nestjs/common'
import { ConsoleLogger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import type { CliRuntimeOptions } from './cli.interface'
import { CommandModule } from './command'
import { ConfigModule } from './config'
import { LogLevels, LoggerModule } from './logger'

export class CliModule {
  /** Boots a command module with the runtime modules: the config, the running command and the logger. */
  public static create(module: Type | DynamicModule, { config, ...command }: CliRuntimeOptions): Promise<INestApplicationContext> {
    const trace = config.logLevel === LogLevels.TRACE

    if (trace) {
      process.env.NEST_DEBUG = 'true'
    }

    return NestFactory.createApplicationContext(
      { ...ConfigModule.forRoot({ config }), imports: [CommandModule.forRoot(command), LoggerModule, module] },
      {
        // a boot failure is thrown to the command, which logs it once through its own logger
        // a logger instance replaces the process-wide one of nest, which a level list would only reconfigure, even when it is the logger of a closed application
        logger: trace ? new ConsoleLogger({ logLevels: ['fatal', 'error', 'warn', 'log', 'debug', 'verbose'] }) : false,
        abortOnError: false
      }
    )
  }

  /** Boots only the runtime modules for a command that failed before its own module did, writing every level to stderr, away from the command output. */
  public static createFallback(options: CliRuntimeOptions): Promise<INestApplicationContext> {
    return CliModule.create(LoggerModule.forRoot({ stderr: Object.values(LogLevels) }), options)
  }
}
