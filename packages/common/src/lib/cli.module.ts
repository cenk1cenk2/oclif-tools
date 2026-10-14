import type { DynamicModule, INestApplicationContext, Type } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import type { CliModuleOptions } from './cli.interface'
import type { ConfigModuleOptions } from './config'
import { ConfigModule } from './config'
import { FilesystemModule } from './fs'
import { LogLevels, LoggerModule } from './logger'
import { LogoModule } from './logo'
import { ParserModule } from './parser'

export class CliModule {
  public static forRoot(options: CliModuleOptions = {}): DynamicModule {
    return {
      module: CliModule,
      imports: [LoggerModule.forRoot(options.logger ?? {}), FilesystemModule, ParserModule.forRoot(options.parser), LogoModule.forRoot(options.logo ?? {})]
    }
  }

  public static create(module: Type | DynamicModule, options: ConfigModuleOptions): Promise<INestApplicationContext> {
    const trace = options.config.logLevel === LogLevels.TRACE

    if (trace) {
      process.env.NEST_DEBUG = 'true'
    }

    return NestFactory.createApplicationContext(
      { ...ConfigModule.forRoot(options), imports: [module] },
      {
        // a boot failure is thrown to the command, which logs it once through its own logger
        logger: trace ? ['fatal', 'error', 'warn', 'log', 'debug', 'verbose'] : false,
        abortOnError: false
      }
    )
  }
}
