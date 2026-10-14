import type { DynamicModule, INestApplicationContext, Type } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import type { CliModuleOptions, CliRuntimeOptions } from './cli.interface'
import { CommandModule } from './command'
import { ConfigModule } from './config'
import { FilesystemModule } from './fs'
import type { LoggerModuleOptions } from './logger'
import { LogLevels, LoggerModule, TOKEN_LOGGER_MODULE_OPTIONS } from './logger'
import { LogoModule } from './logo'
import { ParserModule } from './parser'

export class CliModule {
  public static forRoot(options: CliModuleOptions = {}): DynamicModule {
    return {
      module: CliModule,
      imports: [LoggerModule.forRoot(options.logger ?? {}), FilesystemModule, ParserModule.forRoot(options.parser), LogoModule.forRoot(options.logo ?? {})]
    }
  }

  /** Boots only the logging of a command module, taking its logger options from a preview that runs none of its providers. */
  public static async forFallback(module: Type | DynamicModule, options: CliRuntimeOptions): Promise<DynamicModule> {
    let logger: LoggerModuleOptions

    try {
      const preview = await CliModule.create(module, options, true)

      logger = preview.get(TOKEN_LOGGER_MODULE_OPTIONS, { strict: false })

      await preview.close()
    } catch {
      // a module graph that can not even be previewed leaves the logger options unknown, which the default below covers
    }

    // options from forRootAsync only exist once their factory runs, so unknown options keep the crash on stderr, away from the command output
    return CliModule.forRoot({ logger: logger ?? { stderr: true } })
  }

  public static create(module: Type | DynamicModule, { config, ...command }: CliRuntimeOptions, preview = false): Promise<INestApplicationContext> {
    const trace = config.logLevel === LogLevels.TRACE

    if (trace) {
      process.env.NEST_DEBUG = 'true'
    }

    return NestFactory.createApplicationContext(
      { ...ConfigModule.forRoot({ config }), imports: [CommandModule.forRoot(command), module] },
      {
        // a boot failure is thrown to the command, which logs it once through its own logger
        logger: trace ? ['fatal', 'error', 'warn', 'log', 'debug', 'verbose'] : false,
        abortOnError: false,
        preview
      }
    )
  }
}
