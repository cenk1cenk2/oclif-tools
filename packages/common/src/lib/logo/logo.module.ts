import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import { TOKEN_LOGO_MODULE_OPTIONS } from './logo.constants'
import type { LogoModuleOptions } from './logo.interface'
import { LogoService } from './logo.service'
import { buildScopedModule } from '@lib/scoped-module'
import type { ScopedModuleExtras } from '@lib/scoped-module.interface'

const { ConfigurableModuleClass } = buildScopedModule<LogoModuleOptions>(TOKEN_LOGO_MODULE_OPTIONS)

@Module({
  providers: [LogoService],
  exports: [LogoService]
})
export class LogoModule extends ConfigurableModuleClass {
  public static forRoot(options: LogoModuleOptions & Partial<ScopedModuleExtras> = {}): DynamicModule {
    return super.forRoot(options)
  }
}
