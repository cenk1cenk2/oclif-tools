import { Injectable, OnModuleInit } from '@nestjs/common'
import { parse, stringify } from 'yaml'

import type { GenericParser } from '../parser.interface'
import { LoggerService } from '@lib/logger'

@Injectable()
export class YamlParser implements GenericParser, OnModuleInit {
  public readonly extensions: string[] = ['yaml', 'yml']

  constructor(private readonly logger: LoggerService) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return parse(data.toString())
    } catch(e: any) {
      this.logger.trace('Error during parsing YAML file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return stringify(data, { prettyErrors: true })
  }
}
