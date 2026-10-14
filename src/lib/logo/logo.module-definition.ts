import { ConfigurableModuleBuilder } from '@nestjs/common'

import type { LogoModuleOptions } from './logo.interface'

export const { ConfigurableModuleClass: ConfigurableLogoModule, MODULE_OPTIONS_TOKEN: TOKEN_LOGO_MODULE_OPTIONS } = new ConfigurableModuleBuilder<LogoModuleOptions>()
  .setClassMethodName('forRoot')
  .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
  .build()
