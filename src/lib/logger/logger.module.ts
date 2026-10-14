import type { ConfigurableModuleAsyncOptions, DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { LoggerOptionsModule } from './logger-options.module'
import type { LoggerModuleOptions } from './logger.interface'
import { LoggerService } from './logger.service'
import { NestLogger } from './nest-logger.service'

@Global()
@Module({
  providers: [LoggerService, NestLogger],
  exports: [LoggerService]
})
export class LoggerModule {
  public static forRoot(options: LoggerModuleOptions = {}): DynamicModule {
    return LoggerOptionsModule.forRoot(options)
  }

  public static forRootAsync(options: ConfigurableModuleAsyncOptions<LoggerModuleOptions>): DynamicModule {
    return LoggerOptionsModule.forRootAsync(options)
  }
}
