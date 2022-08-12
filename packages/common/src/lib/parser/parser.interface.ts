export declare class GenericParser {
  static extensions: string[]
  public parse<T = unknown>(data: string | Buffer): T | Promise<T>
  public stringify<T = any>(data: T): string | Promise<string>
}
