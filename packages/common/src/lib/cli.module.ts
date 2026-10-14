import type { DynamicModule, INestApplicationContext, Type } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import type { CliModuleOptions } from './cli.interface'
import type { ConfigModuleOptions } from './config'
import { ConfigModule } from './config'
import { FilesystemModule } from './fs'
import { LoggerModule } from './logger'
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
    if (process.env.LOG_LEVEL === 'trace') {
      process.env.NEST_DEBUG = 'true'
    }

    return NestFactory.createApplicationContext(
      { ...ConfigModule.forRoot(options), imports: [module] },
      {
        logger: [process.env.LOG_LEVEL === 'trace' ? 'debug' : 'error'],
        abortOnError: false
      }
    )
  }
}
