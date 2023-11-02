export declare class GenericParser {
  public readonly extensions: string[]
  public parse<T = unknown>(data: string | Buffer): T
  public stringify<T = any>(data: T): string
}
