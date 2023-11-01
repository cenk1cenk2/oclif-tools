import { Injectable } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'

import type { GenericParser } from './parser.interface'
import type { ClassType } from '@interfaces'
import { FileSystemService } from '@lib/fs'
import type { LockableData } from '@lib/locker'
import { LoggerService } from '@lib/logger'

@Injectable()
export class ParserService {
  public parsers: ClassType<GenericParser>[] = []

  constructor (
    private moduleRef: ModuleRef,
    private fs: FileSystemService,
    private readonly logger: LoggerService
  ) {
    this.logger.setup(this.constructor.name)
  }

  public byFt (file: string): GenericParser {
    const ext = (file.includes('.') ? this.fs.extname(file) : file).replace(/^\./, '')
    const Parser = this.parsers.find((parser) => (parser as typeof GenericParser).extensions.includes(ext))

    if (!Parser) {
      throw new Error(`Parser for the extension is not configured: ${ext}`)
    }

    return this.fetch(Parser)
  }

  public fetch<T extends GenericParser>(Parser: ClassType<T>): T {
    return this.moduleRef.get(Parser)
  }

  public async inject<T extends GenericParser>(Parser: ClassType<T>): Promise<T> {
    const parser = await this.moduleRef.create(Parser)

    return parser
  }

  public async register (...parsers: ClassType<GenericParser>[]): Promise<void> {
    this.parsers.push(...parsers)

    await Promise.all(parsers.map(async (parser) => this.inject(parser)))

    this.logger.trace(
      'Registered parsers: %o',
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
    const parser = this.byFt(file)

    this.logger.trace('Parsing file: %s -> %s', file, parser.constructor.name)

    return parser.parse<T>(data)
  }

  public async stringify<T = any>(file: string, data: T): Promise<string> {
    const parser = this.byFt(file)

    this.logger.trace('Stringifying file: %s -> %s', file, parser.constructor.name)

    return parser.stringify<T>(data)
  }
}
