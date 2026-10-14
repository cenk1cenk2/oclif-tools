import { Injectable } from '@nestjs/common'

import type { GenericParser } from '../parser.interface'
import { LoggerService } from '@lib/logger'

@Injectable()
export class JsonParser implements GenericParser {
  public readonly extensions: string[] = ['json']

  constructor(private readonly logger: LoggerService) {
    this.logger.setup(this.constructor.name)
  }

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return JSON.parse(data.toString())
    } catch(e: any) {
      this.logger.trace('Error during parsing JSON file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return JSON.stringify(data, null, 2)
  }
}
