import { TaskModule } from '@cenk1cenk2/oclif-common'
import { Module } from '@nestjs/common'

import { Resource } from './resource.service.js'
import { SignalHandler } from './signal.handler.js'

@Module({
  imports: [TaskModule.forRoot()],
  providers: [SignalHandler, Resource]
})
export class SignalModule {}
