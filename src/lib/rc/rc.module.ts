import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Module } from '@nestjs/common'

import { TOKEN_RC, TOKEN_RC_MODULE_OPTIONS } from './rc.constants'
import type { RcModuleOptions } from './rc.interface'
import { RcService } from './rc.service'
import { TOKEN_OCLIF_CONFIG } from '@lib/command/command.constants'
import { LoggerService } from '@lib/logger'

@Module({
  providers: [
    {
      provide: RcService,
      inject: [TOKEN_RC_MODULE_OPTIONS, TOKEN_OCLIF_CONFIG, LoggerService],
      useFactory: RcService.load
    },
    {
      provide: TOKEN_RC,
      inject: [RcService],
      useFactory: (rc: RcService): unknown => rc.config
    }
  ],
  exports: [RcService, TOKEN_RC]
})
export class RcModule
  extends new ConfigurableModuleBuilder<RcModuleOptions>({ optionsInjectionToken: TOKEN_RC_MODULE_OPTIONS as symbol })
    .setClassMethodName('forRoot')
    .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
    .build().ConfigurableModuleClass {
  public static forRoot(options: RcModuleOptions & { isGlobal?: boolean }): DynamicModule {
    return super.forRoot(options)
  }
}
