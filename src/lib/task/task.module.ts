import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import { TaskManager } from './task-manager.service'
import { TOKEN_TASK_MODULE_OPTIONS } from './task.constants'
import type { TaskModuleOptions } from './task.interface'
import { buildScopedModule } from '@lib/scoped-module'
import type { ScopedModuleExtras } from '@lib/scoped-module.interface'

const { ConfigurableModuleClass } = buildScopedModule<TaskModuleOptions>(TOKEN_TASK_MODULE_OPTIONS)

@Module({
  providers: [TaskManager],
  exports: [TaskManager]
})
export class TaskModule extends ConfigurableModuleClass {
  public static forRoot(options: TaskModuleOptions & Partial<ScopedModuleExtras> = {}): DynamicModule {
    return super.forRoot(options)
  }
}
