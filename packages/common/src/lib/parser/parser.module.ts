import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'

import { ConfigLoaderService } from './config-loader.service'
import { JsonParser } from './fts'
import { TOKEN_PARSER_MODULE_OPTIONS, TOKEN_PARSERS } from './parser.constants'
import type { GenericParser, ParserModuleOptions } from './parser.interface'
import { ParserService } from './parser.service'
import { FilesystemModule } from '@lib/fs'
import { buildScopedModule } from '@lib/scoped-module'
import type { ScopedModuleExtras } from '@lib/scoped-module.interface'

const { ConfigurableModuleClass } = buildScopedModule<ParserModuleOptions>(TOKEN_PARSER_MODULE_OPTIONS)

@Module({
  imports: [FilesystemModule.forRoot()],
  providers: [
    ParserService,
    ConfigLoaderService,
    {
      provide: TOKEN_PARSERS,
      inject: [TOKEN_PARSER_MODULE_OPTIONS, ModuleRef],
      useFactory: (options: ParserModuleOptions, ref: ModuleRef): Promise<GenericParser[]> => Promise.all((options.parsers ?? [JsonParser]).map((parser) => ref.create(parser)))
    }
  ],
  exports: [ParserService, ConfigLoaderService]
})
export class ParserModule extends ConfigurableModuleClass {
  public static forRoot(options: ParserModuleOptions & Partial<ScopedModuleExtras> = {}): DynamicModule {
    return super.forRoot(options)
  }
}
