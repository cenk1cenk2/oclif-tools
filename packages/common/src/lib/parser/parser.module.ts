import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { JsonParser } from './fts'
import { TOKEN_PARSERS } from './parser.constants'
import type { GenericParser, ParserModuleOptions } from './parser.interface'
import { ParserService } from './parser.service'
import { FilesystemModule } from '@lib/fs'

@Global()
@Module({
  imports: [FilesystemModule],
  providers: [ParserService],
  exports: [ParserService]
})
export class ParserModule {
  public static forRoot(options: ParserModuleOptions = {}): DynamicModule {
    const parsers = options.parsers ?? [JsonParser]

    return {
      module: ParserModule,
      providers: [
        ...parsers,
        {
          provide: TOKEN_PARSERS,
          useFactory: (...instances: GenericParser[]): GenericParser[] => instances,
          inject: parsers
        }
      ]
    }
  }
}
