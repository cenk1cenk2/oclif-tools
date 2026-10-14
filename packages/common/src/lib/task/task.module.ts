import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Global, Module } from '@nestjs/common'

import { TaskManager } from './task-manager.service'
import { TOKEN_TASK_MODULE_OPTIONS } from './task.constants'
import type { TaskModuleOptions } from './task.interface'

const { ConfigurableModuleClass } = new ConfigurableModuleBuilder<TaskModuleOptions>({ optionsInjectionToken: TOKEN_TASK_MODULE_OPTIONS as symbol })
  .setClassMethodName('forRoot')
  .build()

@Global()
@Module({
  providers: [TaskManager],
  exports: [TaskManager]
})
export class TaskModule extends ConfigurableModuleClass {
  public static forRoot(options: TaskModuleOptions = {}): DynamicModule {
    return super.forRoot(options)
  }
}
