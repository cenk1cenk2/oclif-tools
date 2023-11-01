import { Global, Module } from '@nestjs/common'

import { LoggerService } from './logger.service'
import { WinstonService } from './winston.service'

@Global()
@Module({
  providers: [ WinstonService, LoggerService ],
  exports: [ LoggerService ]
})
export class LoggerModule {}
