import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import { TOKEN_RC } from './rc.constants'
import type { RcModuleOptions } from './rc.interface'
import { ConfigurableRcModule, TOKEN_RC_MODULE_OPTIONS } from './rc.module-definition'
import { RcService } from './rc.service'
import { TOKEN_OCLIF_CONFIG } from '@lib/command/command.constants'
import { LoggerService } from '@lib/logger'
import { ValidatorModule, ValidatorService } from '@lib/validator'

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
export class RcModule extends ConfigurableRcModule {
  public static forRoot(options: RcModuleOptions & { isGlobal?: boolean }): DynamicModule {
    return super.forRoot(options)
  }
}
