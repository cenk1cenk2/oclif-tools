import { ConfigurableModuleBuilder, Module } from '@nestjs/common'

import { TOKEN_LOGO_MODULE_OPTIONS } from './logo.constants'
import type { LogoModuleOptions } from './logo.interface'
import { LogoService } from './logo.service'

@Module({
  providers: [LogoService],
  exports: [LogoService]
})
export class LogoModule
  extends new ConfigurableModuleBuilder<LogoModuleOptions>({ optionsInjectionToken: TOKEN_LOGO_MODULE_OPTIONS as symbol }).setClassMethodName('forRoot').build()
    .ConfigurableModuleClass {}
