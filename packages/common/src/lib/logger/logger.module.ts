import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Global, Module } from '@nestjs/common'

import { TOKEN_LOGGER_MODULE_OPTIONS } from './logger.constants'
import type { LoggerModuleOptions } from './logger.interface'
import { LoggerService } from './logger.service'
import { NestLogger } from './nest-logger.service'

const { ConfigurableModuleClass } = new ConfigurableModuleBuilder<LoggerModuleOptions>({ optionsInjectionToken: TOKEN_LOGGER_MODULE_OPTIONS as symbol })
  .setClassMethodName('forRoot')
  .build()

@Global()
@Module({
  providers: [LoggerService, NestLogger],
  exports: [LoggerService, TOKEN_LOGGER_MODULE_OPTIONS]
})
export class LoggerModule extends ConfigurableModuleClass {
  public static forRoot(options: LoggerModuleOptions = {}): DynamicModule {
    return super.forRoot(options)
  }
}
