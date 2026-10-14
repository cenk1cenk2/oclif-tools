import type { Type } from '@nestjs/common'
import type { CreateNodeOptions, DocumentOptions, ParseOptions, SchemaOptions, ToJSOptions, ToStringOptions } from 'yaml'

export declare class GenericParser {
  public readonly extensions: string[]
  public parse<T = unknown>(data: string | Buffer): T
  public stringify<T = any>(data: T): string
}

export interface ParserModuleOptions {
  parsers?: Type<GenericParser>[]
  json?: JsonParserOptions
  yaml?: YamlParserOptions
}

export interface JsonParserOptions {
  /** the reviver of JSON.parse */
  reviver?: (key: string, value: any) => any
  /** the replacer of JSON.stringify */
  replacer?: (key: string, value: any) => any
  /** the indentation of JSON.stringify, 2 by default */
  space?: string | number
}

export interface YamlParserOptions {
  /** the options of parse from the yaml package */
  parse?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions
  /** the options of stringify from the yaml package, over prettyErrors */
  stringify?: DocumentOptions & SchemaOptions & ParseOptions & CreateNodeOptions & ToStringOptions
}
