import { Module } from '@nestjs/common'

import { SharedModule } from '../shared/shared.module.js'
import { GoodbyeHandler } from './goodbye.handler.js'

@Module({
  imports: [SharedModule],
  providers: [GoodbyeHandler]
})
export class GoodbyeModule {}
