import { Injectable, OnModuleInit } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'

import type { GenericParser } from './parser.interface'
import type { ClassType } from '@interfaces'
import { FileSystemService } from '@lib/fs'
import type { LockableData } from '@lib/locker'
import { LoggerService } from '@lib/logger'

@Injectable()
export class ParserService implements OnModuleInit {
  private readonly instances: GenericParser[] = []

  constructor(
    private moduleRef: ModuleRef,
    private fs: FileSystemService,
    private readonly logger: LoggerService
  ) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public byFt(file: string): GenericParser {
    const ext = (file.includes('.') ? this.fs.extname(file) : file).replace(/^\./, '')
    const Parser = this.instances.find((parser) => parser.extensions.includes(ext))

    if (!Parser) {
      throw new Error(`Parser for the extension is not configured: ${ext}`)
    }

    return Parser
  }

  public fetch<T extends GenericParser>(Parser: ClassType<T>): T {
    const parser = this.instances.find((instance) => instance instanceof Parser) as T

    if (!parser) {
      throw new Error(`Specified parser has not been initiated: ${Parser.name}`)
    }

    return parser
  }

  public async inject<T extends GenericParser>(Parser: ClassType<T>): Promise<T> {
    // this is done through manual way to not make everything async with moduleRef.resolve

    const parser = await this.moduleRef.create(Parser)

    this.instances.push(parser)

    return parser
  }

  public async register(...parsers: ClassType<GenericParser>[]): Promise<void> {
    await Promise.all(parsers.map(async(parser) => this.inject(parser)))

    this.logger.trace(
      'Registered parsers: %o',
      parsers.map((p) => p.name)
    )
  }

  public async read<T = unknown>(file: string): Promise<T> {
    return this.parse(file, await this.fs.read(file))
  }

  public async write<T = LockableData>(file: string, data: T): Promise<void> {
    return this.fs.write(file, this.stringify(file, data))
  }

  public parse<T = unknown>(file: string, data: string | Buffer): T {
    const parser = this.byFt(file)

    this.logger.trace('Parsing file: %s -> %s', file, parser.constructor.name)

    return parser.parse<T>(data)
  }

  public parseWith<T = unknown>(Parser: ClassType<GenericParser>, data: string | Buffer): T {
    const parser = this.fetch(Parser)

    this.logger.trace('Parsing data with: %s', parser.constructor.name)

    return parser.parse<T>(data)
  }

  public stringify<T = any>(file: string, data: T): string {
    const parser = this.byFt(file)

    this.logger.trace('Stringifying file: %s -> %s', file, parser.constructor.name)

    return parser.stringify<T>(data)
  }

  public stringifyWith<T = any>(Parser: ClassType<GenericParser>, data: T): string {
    const parser = this.fetch(Parser)

    this.logger.trace('Stringifying data: %s', parser.constructor.name)

    return parser.stringify<T>(data)
  }
}
