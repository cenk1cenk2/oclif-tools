import { ConfigurableModuleBuilder } from '@nestjs/common'

import type { RcModuleOptions } from './rc.interface'

export const { ConfigurableModuleClass: ConfigurableRcModule, MODULE_OPTIONS_TOKEN: TOKEN_RC_MODULE_OPTIONS } = new ConfigurableModuleBuilder<RcModuleOptions>()
  .setClassMethodName('forRoot')
  .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
  .build()
