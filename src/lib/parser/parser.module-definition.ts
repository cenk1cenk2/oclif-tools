import { ConfigurableModuleBuilder } from '@nestjs/common'

import type { ParserModuleOptions } from './parser.interface'

export const { ConfigurableModuleClass: ConfigurableParserModule, MODULE_OPTIONS_TOKEN: TOKEN_PARSER_MODULE_OPTIONS } = new ConfigurableModuleBuilder<ParserModuleOptions>()
  .setClassMethodName('forRoot')
  .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
  .build()
