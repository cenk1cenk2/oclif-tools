import type { GenericParser } from './parser.interface'
import { YamlParser } from './yaml-parser.service'
import { FileSystemService } from '@lib/fs'
import type { LockableData } from '@lib/locker'
import { Logger } from '@utils/logger'

export class ParserService {
  static extensions: string[] = []
  static instance: ParserService
  public parsers: (new () => GenericParser)[]
  private readonly logger = new Logger(this.constructor.name)
  private readonly fs = new FileSystemService()

  constructor (parsers?: new () => GenericParser) {
    if (ParserService.instance) {
      return ParserService.instance
    } else {
      ParserService.instance = this

      this.logger.trace('Created a new instance.')
    }

    if (!parsers) {
      this.parsers = [ YamlParser ]
    }
  }

  public getParser (file: string): GenericParser {
    const ext = this.fs.extname(file)
    const Parser = this.parsers.find((parser) => parser.prototype.extensions.includes(ext))

    if (!Parser) {
      throw new Error(`Parser for the extension is not configured: ${ext}`)
    }

    return new Parser()
  }

  public async read<T = unknown>(file: string): Promise<T> {
    const Parser = this.getParser(file)

    return this.parse(Parser, await this.fs.read(file))
  }

  public async write<T = LockableData>(file: string, data: T): Promise<void> {
    const Parser = this.getParser(file)

    return this.fs.write(file, await this.stringify(Parser, data))
  }

  private parse<T = unknown>(parser: GenericParser, data: string | Buffer): T | Promise<T> {
    return parser.parse<T>(data)
  }

  private stringify<T = any>(parser: GenericParser, data: T): string | Promise<string> {
    return parser.stringify<T>(data)
  }
}
