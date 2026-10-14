import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import { TaskManager } from './task-manager.service'
import type { TaskModuleOptions } from './task.interface'
import { ConfigurableTaskModule } from './task.module-definition'

@Module({
  providers: [TaskManager],
  exports: [TaskManager]
})
export class TaskModule extends ConfigurableTaskModule {
  public static forRoot(options: TaskModuleOptions & { isGlobal?: boolean } = {}): DynamicModule {
    return super.forRoot(options)
  }
}
