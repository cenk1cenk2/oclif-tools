import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Module } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'

import { JsonParser } from './fts'
import { TOKEN_PARSER_MODULE_OPTIONS, TOKEN_PARSERS } from './parser.constants'
import type { GenericParser, ParserModuleOptions } from './parser.interface'
import { ParserService } from './parser.service'
import { FilesystemModule } from '@lib/fs'

@Module({
  imports: [FilesystemModule.forRoot()],
  providers: [
    ParserService,
    {
      provide: TOKEN_PARSERS,
      inject: [TOKEN_PARSER_MODULE_OPTIONS, ModuleRef],
      useFactory: (options: ParserModuleOptions, ref: ModuleRef): Promise<GenericParser[]> => Promise.all((options.parsers ?? [JsonParser]).map((parser) => ref.create(parser)))
    }
  ],
  exports: [ParserService]
})
export class ParserModule
  extends new ConfigurableModuleBuilder<ParserModuleOptions>({ optionsInjectionToken: TOKEN_PARSER_MODULE_OPTIONS as symbol })
    .setClassMethodName('forRoot')
    .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
    .build().ConfigurableModuleClass {
  public static forRoot(options: ParserModuleOptions & { isGlobal?: boolean } = {}): DynamicModule {
    return super.forRoot(options)
  }
}
