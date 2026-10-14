import { ConfigurableModuleBuilder } from '@nestjs/common'

import type { TaskModuleOptions } from './task.interface'

export const { ConfigurableModuleClass: ConfigurableTaskModule, MODULE_OPTIONS_TOKEN: TOKEN_TASK_MODULE_OPTIONS } = new ConfigurableModuleBuilder<TaskModuleOptions>()
  .setClassMethodName('forRoot')
  .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
  .build()
