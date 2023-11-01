import { Global, Module } from '@nestjs/common'

import { ParserService } from './parser.service'
import { FilesystemModule } from '@lib/fs'

@Global()
@Module({
  imports: [ FilesystemModule ],
  providers: [ ParserService ],
  exports: [ ParserService ]
})
export class ParserModule {}
