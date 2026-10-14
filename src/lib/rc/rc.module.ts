import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import { TOKEN_RC, TOKEN_RC_MODULE_OPTIONS } from './rc.constants'
import type { RcModuleOptions } from './rc.interface'
import { RcService } from './rc.service'
import { TOKEN_OCLIF_CONFIG } from '@lib/command/command.constants'
import { LoggerService } from '@lib/logger'
import { buildScopedModule } from '@lib/scoped-module'
import type { ScopedModuleExtras } from '@lib/scoped-module.interface'
import { ValidatorModule, ValidatorService } from '@lib/validator'

const { ConfigurableModuleClass } = buildScopedModule<RcModuleOptions>(TOKEN_RC_MODULE_OPTIONS)

@Module({
  imports: [ValidatorModule.forRoot()],
  providers: [
    {
      provide: RcService,
      inject: [TOKEN_RC_MODULE_OPTIONS, TOKEN_OCLIF_CONFIG, ValidatorService, LoggerService],
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
export class RcModule extends ConfigurableModuleClass {
  public static forRoot(options: RcModuleOptions & Partial<ScopedModuleExtras>): DynamicModule {
    return super.forRoot(options)
  }
}
