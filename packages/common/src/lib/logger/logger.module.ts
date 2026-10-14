import type { DynamicModule, Type, ValueProvider } from '@nestjs/common'
import { ConfigurableModuleBuilder, Global, Module } from '@nestjs/common'
import { MODULE_METADATA } from '@nestjs/common/constants.js'

import { TOKEN_LOGGER_MODULE_OPTIONS } from './logger.constants'
import type { LoggerModuleOptions } from './logger.interface'
import { LoggerService } from './logger.service'
import { WinstonService } from './winston.service'

@Global()
@Module({
  providers: [WinstonService, LoggerService],
  exports: [LoggerService, TOKEN_LOGGER_MODULE_OPTIONS]
})
export class LoggerModule
  extends new ConfigurableModuleBuilder<LoggerModuleOptions>({ optionsInjectionToken: TOKEN_LOGGER_MODULE_OPTIONS as symbol }).setClassMethodName('forRoot').build()
    .ConfigurableModuleClass {
  /** finds the logger options a module graph configures without booting it, so a crash can still log the way the command asked for */
  public static optionsOf(module: Type | DynamicModule): LoggerModuleOptions | undefined {
    if ('module' in module && module.module === LoggerModule) {
      return (module.providers.find((provider) => (provider as ValueProvider).provide === TOKEN_LOGGER_MODULE_OPTIONS) as ValueProvider<LoggerModuleOptions>)?.useValue
    }

    const imports: unknown[] = [...(Reflect.getMetadata(MODULE_METADATA.IMPORTS, 'module' in module ? module.module : module) ?? []), ...((module as DynamicModule).imports ?? [])]

    for (const imported of imports) {
      // forward references and promised modules can not be read without booting
      if (typeof imported !== 'function' && !(imported as DynamicModule)?.module) {
        continue
      }

      const options = LoggerModule.optionsOf(imported as Type | DynamicModule)

      if (options) {
        return options
      }
    }
  }
}
