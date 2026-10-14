import { Module } from '@nestjs/common'

import { HelloHandler } from './index.handler.js'
import { CliModule } from '@cenk1cenk2/oclif-common'

@Module({
  imports: [CliModule.forRoot()],
  providers: [HelloHandler]
})
export class HelloModule {}
