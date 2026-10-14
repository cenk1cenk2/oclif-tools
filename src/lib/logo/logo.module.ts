import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import type { LogoModuleOptions } from './logo.interface'
import { ConfigurableLogoModule } from './logo.module-definition'
import { LogoService } from './logo.service'

@Module({
  providers: [LogoService],
  exports: [LogoService]
})
export class LogoModule extends ConfigurableLogoModule {
  public static forRoot(options: LogoModuleOptions & { isGlobal?: boolean } = {}): DynamicModule {
    return super.forRoot(options)
  }
}
