import type { DynamicModule, INestApplicationContext } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import type { CliModuleOptions } from './cli.interface'
import type { ConfigModuleOptions } from './config'
import { ConfigModule } from './config'
import { TOKEN_CONFIG_MODULE_OPTIONS } from './config/config.constants'
import { FilesystemModule } from './fs'
import { LogLevels, LoggerModule } from './logger'
import { LogoModule } from './logo'
import { ParserModule } from './parser'

export class CliModule {
  public static forRoot(options: CliModuleOptions): DynamicModule {
    return {
      module: CliModule,
      global: true,
      imports: [ConfigModule, LoggerModule, FilesystemModule, ParserModule, LogoModule],
      providers: [
        {
          provide: TOKEN_CONFIG_MODULE_OPTIONS,
          useValue: options.config satisfies ConfigModuleOptions
        }
      ],
      exports: [TOKEN_CONFIG_MODULE_OPTIONS]
    }
  }

  public static forMinimum(): DynamicModule {
    return {
      module: CliModule,
      global: true,
      imports: [LoggerModule],
      providers: [
        {
          provide: TOKEN_CONFIG_MODULE_OPTIONS,
          useValue: { config: { logLevel: LogLevels.INFO, isJson: false } } satisfies ConfigModuleOptions
        }
      ],
      exports: [TOKEN_CONFIG_MODULE_OPTIONS]
    }
  }

  public static create(cls: DynamicModule): Promise<INestApplicationContext> {
    if (process.env.LOG_LEVEL === 'trace') {
      process.env.NEST_DEBUG = 'true'
    }

    return NestFactory.createApplicationContext(cls, {
      logger: [process.env.LOG_LEVEL === 'trace' ? 'debug' : 'error']
    })
  }
}
