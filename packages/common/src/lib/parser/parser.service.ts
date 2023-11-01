import { Injectable } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'

import { EnvironmentVariableParser, JsonParser, YamlParser } from './fts'
import type { GenericParser } from './parser.interface'
import type { ClassType } from '@interfaces'
import { FileSystemService } from '@lib/fs'
import type { LockableData } from '@lib/locker'
import { LoggerService } from '@lib/logger'

@Injectable()
export class ParserService {
  public parsers: ClassType<GenericParser>[] = [ YamlParser, JsonParser, EnvironmentVariableParser ]

  constructor (
    private moduleRef: ModuleRef,
    private fs: FileSystemService,
    private readonly logger: LoggerService
  ) {
    this.logger.setup(this.constructor.name)
  }

  public async getParser (file: string): Promise<GenericParser> {
    const ext = (file.includes('.') ? this.fs.extname(file) : file).replace(/^\./, '')
    const Parser = this.parsers.find((parser) => (parser as typeof GenericParser).extensions.includes(ext))

    if (!Parser) {
      throw new Error(`Parser for the extension is not configured: ${ext}`)
    }

    return this.injectParser(Parser)
  }

  public async injectParser (Parser: ClassType<GenericParser>): Promise<GenericParser> {
    const parser = await this.moduleRef.create(Parser)

    return parser
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

  public async parse<T = unknown>(file: string, data: string | Buffer): Promise<T> {
    const parser = await this.getParser(file)

    this.logger.trace('Parsing file: %s -> %s', file, parser.constructor.name)

    return parser.parse<T>(data)
  }

  public async stringify<T = any>(file: string, data: T): Promise<string> {
    const parser = await this.getParser(file)

    this.logger.trace('Stringifying file: %s -> %s', file, parser.constructor.name)

    return parser.stringify<T>(data)
  }
}
