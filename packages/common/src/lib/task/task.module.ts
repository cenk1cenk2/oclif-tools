import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Module } from '@nestjs/common'

import { TaskManager } from './task-manager.service'
import { TOKEN_TASK_MODULE_OPTIONS } from './task.constants'
import type { TaskModuleExtras, TaskModuleOptions } from './task.interface'

const { ConfigurableModuleClass } = new ConfigurableModuleBuilder<TaskModuleOptions>({ optionsInjectionToken: TOKEN_TASK_MODULE_OPTIONS as symbol })
  .setClassMethodName('forRoot')
  .setExtras<TaskModuleExtras>({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
  .build()

@Module({
  providers: [TaskManager],
  exports: [TaskManager]
})
export class TaskModule extends ConfigurableModuleClass {
  public static forRoot(options: TaskModuleOptions & Partial<TaskModuleExtras> = {}): DynamicModule {
    return super.forRoot(options)
  }
}
