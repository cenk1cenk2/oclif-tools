import { JsonParser } from './json-parser.service'
import type { GenericParser } from './parser.interface'
import { YamlParser } from './yaml-parser.service'
import type { ClassType } from '@interfaces'
import { FileSystemService } from '@lib/fs'
import type { LockableData } from '@lib/locker'
import { Logger } from '@utils/logger'

export class ParserService {
  static instance: ParserService
  public parsers: ClassType<GenericParser>[] = [ YamlParser, JsonParser ]
  private readonly logger = new Logger(this.constructor.name)
  private readonly fs = new FileSystemService()

  constructor (parsers?: ClassType<GenericParser>[]) {
    if (ParserService.instance) {
      return ParserService.instance
    } else {
      if (parsers) {
        this.parsers = parsers
      }

      ParserService.instance = this

      this.logger.trace('Created a new instance.')
    }
  }

  public getParser (file: string): GenericParser {
    const ext = file.includes('.') ? this.fs.extname(file) : file
    const Parser = this.parsers.find((parser) => (parser as any).extensions.includes(ext.replace(/^\./, '')))

    if (!Parser) {
      throw new Error(`Parser for the extension is not configured: ${ext}`)
    }

    return new Parser()
  }

  public setParsers (...parsers: ClassType<GenericParser>[]): void {
    this.parsers = parsers
  }

  public addParsers (...parsers: ClassType<GenericParser>[]): void {
    this.parsers.push(...parsers)
  }

  public async read<T = unknown>(file: string): Promise<T> {
    return this.parse(file, await this.fs.read(file))
  }

  public async write<T = LockableData>(file: string, data: T): Promise<void> {
    return this.fs.write(file, await this.stringify(file, data))
  }

  public parse<T = unknown>(file: string, data: string | Buffer): T | Promise<T> {
    const Parser = this.getParser(file)

    return Parser.parse<T>(data)
  }

  public stringify<T = any>(file: string, data: T): string | Promise<string> {
    const Parser = this.getParser(file)

    return Parser.stringify<T>(data)
  }
}
