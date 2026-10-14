import { Module } from '@nestjs/common'

import { SharedModule } from '../shared/shared.module.js'
import { HelloHandler } from './hello.handler.js'

@Module({
  imports: [SharedModule],
  providers: [HelloHandler]
})
export class HelloModule {}
