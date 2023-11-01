import { Global, Module } from '@nestjs/common'

import { ConfigService } from './config.service'
import { ParserModule } from '@lib/parser/parser.module'

@Global()
@Module({
  imports: [ ParserModule ],
  providers: [ ConfigService ],
  exports: [ ConfigService ]
})
export class ConfigModule {}
