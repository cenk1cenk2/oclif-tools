import { EnvironmentVariableParser } from './env-parser.service'
import { JsonParser } from './json-parser.service'
import type { GenericParser } from './parser.interface'
import { YamlParser } from './yaml-parser.service'
import type { ClassType } from '@interfaces'
import { FileSystemService } from '@lib/fs'
import type { LockableData } from '@lib/locker'
import { Logger } from '@utils/logger'

export class ParserService {
  private static instance: ParserService
  public parsers: ClassType<GenericParser>[] = [ YamlParser, JsonParser, EnvironmentVariableParser ]
  private logger: Logger
  private fs: FileSystemService

  constructor (parsers?: ClassType<GenericParser>[]) {
    if (ParserService.instance) {
      return ParserService.instance
    } else {
      if (parsers) {
        this.parsers = parsers
      }

      this.logger = new Logger(this.constructor.name)
      this.fs = new FileSystemService()

      ParserService.instance = this

      this.logger.trace('Created a new instance.')
    }
  }

  public getParser (file: string): GenericParser {
    const ext = (file.includes('.') ? this.fs.extname(file) : file).replace(/^\./, '')
    const Parser = this.parsers.find((parser) => (parser as any).extensions.includes(ext))

    if (!Parser) {
      throw new Error(`Parser for the extension is not configured: ${ext}`)
    }

    return new Parser()
  }

  public setParsers (...parsers: ClassType<GenericParser>[]): void {
    this.parsers = parsers

    this.logger.trace(
      'Set parsers: %s',
      this.parsers.map((p) => p.name)
    )
  }

  public addParsers (...parsers: ClassType<GenericParser>[]): void {
    this.parsers.push(...parsers)

    this.logger.trace(
      'Added parser, current parsers: %s',
      this.parsers.map((p) => p.name)
    )
  }

  public async read<T = unknown>(file: string): Promise<T> {
    return this.parse(file, await this.fs.read(file))
  }

  public async write<T = LockableData>(file: string, data: T): Promise<void> {
    return this.fs.write(file, await this.stringify(file, data))
  }

  public parse<T = unknown>(file: string, data: string | Buffer): T {
    const parser = this.getParser(file)

    this.logger.trace('Parsing file: %s -> %s', file, parser.constructor.name)

    return parser.parse<T>(data)
  }

  public stringify<T = any>(file: string, data: T): string | Promise<string> {
    const parser = this.getParser(file)

    this.logger.trace('Stringifying file: %s -> %s', file, parser.constructor.name)

    return parser.stringify<T>(data)
  }
}
