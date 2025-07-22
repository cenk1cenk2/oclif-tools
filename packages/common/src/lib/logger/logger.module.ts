import { Global, Module } from '@nestjs/common'

import { LoggerService } from './logger.service'
import { WinstonService } from './winston.service'
import { ConfigModule } from '@lib/config'

@Global()
@Module({
  imports: [ConfigModule],
  providers: [WinstonService, LoggerService],
  exports: [LoggerService]
})
export class LoggerModule {}
