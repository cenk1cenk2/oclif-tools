import type { DynamicModule, INestApplicationContext, Type } from '@nestjs/common'
import { ModulesContainer, NestFactory } from '@nestjs/core'

import type { CliRuntimeOptions } from './cli.interface'
import { CommandModule } from './command'
import { ConfigModule } from './config'
import type { LoggerModuleOptions } from './logger'
import { LogLevels, LoggerModule, TOKEN_LOGGER_MODULE_OPTIONS } from './logger'

export class CliModule {
  /** Boots only the logging of a command module, with the logger options it configures. */
  public static async forFallback(module: Type | DynamicModule, options: CliRuntimeOptions): Promise<DynamicModule> {
    let logger: LoggerModuleOptions | false

    try {
      logger = await CliModule.logger(module, options)
    } catch {
      // a module graph that can not even be previewed leaves the logger options unknown, which the default below covers
    }

    // options from forRootAsync only exist once their factory runs, so unknown options keep the crash on stderr, away from the command output
    return LoggerModule.forRoot(logger === false ? {} : (logger ?? { stderr: Object.values(LogLevels) }))
  }

  /** Boots a command module with the runtime modules, adding the default logger when the module configures none. */
  public static async create(module: Type | DynamicModule, options: CliRuntimeOptions): Promise<INestApplicationContext> {
    const imports = (await CliModule.logger(module, options)) === false ? [module, LoggerModule.forRoot()] : [module]
    const trace = options.config.logLevel === LogLevels.TRACE

    if (trace) {
      process.env.NEST_DEBUG = 'true'
    }

    return NestFactory.createApplicationContext(CliModule.root(imports, options), {
      // a boot failure is thrown to the command, which logs it once through its own logger
      logger: trace ? ['fatal', 'error', 'warn', 'log', 'debug', 'verbose'] : false,
      abortOnError: false
    })
  }

  /**
   * Reads the logger options a module configures anywhere in its graph from a preview, which resolves the graph without running any provider.
   * The preview carries a default logger so a graph without one resolves too, and the options of any other logger module are the configured ones.
   * It is false when the module configures no logger, and undefined when its options come from a factory that has not run.
   */
  private static async logger(module: Type | DynamicModule, options: CliRuntimeOptions): Promise<LoggerModuleOptions | false> {
    const defaults: LoggerModuleOptions = {}
    const preview = await NestFactory.createApplicationContext(CliModule.root([module, LoggerModule.forRoot(defaults)], options), {
      logger: false,
      abortOnError: false,
      preview: true
    })

    try {
      const configured = [...preview.get(ModulesContainer).values()]
        .filter((ref) => ref.metatype === LoggerModule)
        .map((ref) => ref.getProviderByKey<LoggerModuleOptions>(TOKEN_LOGGER_MODULE_OPTIONS))
        .find((provider) => provider.instance !== defaults)

      return configured ? configured.instance : false
    } finally {
      await preview.close()
    }
  }

  private static root(imports: (Type | DynamicModule)[], { config, ...command }: CliRuntimeOptions): DynamicModule {
    return { ...ConfigModule.forRoot({ config }), imports: [CommandModule.forRoot(command), ...imports] }
  }
}
