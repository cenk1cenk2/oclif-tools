import { ConfigurableModuleBuilder, Global, Module } from '@nestjs/common'

import { TOKEN_LOGGER_MODULE_OPTIONS } from './logger.constants'
import type { LoggerModuleOptions } from './logger.interface'
import { LoggerService } from './logger.service'

@Global()
@Module({
  providers: [LoggerService],
  exports: [LoggerService, TOKEN_LOGGER_MODULE_OPTIONS]
})
export class LoggerModule
  extends new ConfigurableModuleBuilder<LoggerModuleOptions>({ optionsInjectionToken: TOKEN_LOGGER_MODULE_OPTIONS as symbol }).setClassMethodName('forRoot').build()
    .ConfigurableModuleClass {}
