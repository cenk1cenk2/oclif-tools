import type { Type } from '@nestjs/common'

export declare class GenericParser {
  public readonly extensions: string[]
  public parse<T = unknown>(data: string | Buffer): T
  public stringify<T = any>(data: T): string
}

export interface ParserModuleOptions {
  parsers?: Type<GenericParser>[]
}

export interface ConfigIterator {
  key: (string | number)[]
  env: string
  parser?: string
  extensions?: ConfigIterator[]
}
