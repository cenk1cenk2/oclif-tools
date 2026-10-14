import type { ConfigurableModuleAsyncOptions, DynamicModule, OnModuleInit } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'
import { ModulesContainer } from '@nestjs/core'

import { LoggerOptionsModule } from './logger-options.module'
import type { LoggerModuleOptions } from './logger.interface'
import { LoggerService } from './logger.service'
import { NestLogger } from './nest-logger.service'

@Global()
@Module({
  providers: [LoggerService, NestLogger],
  exports: [LoggerService]
})
export class LoggerModule implements OnModuleInit {
  constructor(private readonly modules: ModulesContainer) {}

  public static forRoot(options: LoggerModuleOptions = {}): DynamicModule {
    return LoggerOptionsModule.forRoot(options)
  }

  public static forRootAsync(options: ConfigurableModuleAsyncOptions<LoggerModuleOptions>): DynamicModule {
    return LoggerOptionsModule.forRootAsync(options)
  }

  public onModuleInit(): void {
    if ([...this.modules.values()].filter((ref) => ref.metatype === LoggerOptionsModule).length > 1) {
      throw new Error('LoggerModule.forRoot is imported more than once, configure the logger in one module and share that module instead.')
    }
  }
}
