import type { InjectionToken } from '@nestjs/common'

export const TOKEN_PARSERS: InjectionToken = Symbol('TOKEN_PARSERS')
export const TOKEN_PARSER_MODULE_OPTIONS: InjectionToken = Symbol('TOKEN_PARSER_MODULE_OPTIONS')
