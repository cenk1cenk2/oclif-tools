import { Module } from '@nestjs/common'

import { GoodbyeHandler } from './goodbye.handler.js'
import { SharedModule } from '../shared/shared.module.js'

@Module({
  imports: [SharedModule],
  providers: [GoodbyeHandler]
})
export class GoodbyeModule {}
