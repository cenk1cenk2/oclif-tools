import { Global, Module } from '@nestjs/common'

import { TaskManager } from './task-manager.service'

@Global()
@Module({
  providers: [TaskManager],
  exports: [TaskManager]
})
export class TaskModule {}
