import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Module } from '@nestjs/common'

import { TaskManager } from './task-manager.service'
import { TOKEN_TASK_MODULE_OPTIONS } from './task.constants'
import type { TaskModuleOptions } from './task.interface'

@Module({
  providers: [TaskManager],
  exports: [TaskManager]
})
export class TaskModule
  extends new ConfigurableModuleBuilder<TaskModuleOptions>({ optionsInjectionToken: TOKEN_TASK_MODULE_OPTIONS as symbol })
    .setClassMethodName('forRoot')
    .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
    .build().ConfigurableModuleClass {
  public static forRoot(options: TaskModuleOptions & { isGlobal?: boolean } = {}): DynamicModule {
    return super.forRoot(options)
  }
}
