import { Module } from '@nestjs/common'

import { HelloHandler } from './hello.handler.js'
import { SharedModule } from '../shared/shared.module.js'

@Module({
  imports: [SharedModule],
  providers: [HelloHandler]
})
export class HelloModule {}
