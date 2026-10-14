import { Injectable } from '@nestjs/common'
import { parse } from 'dotenv'
import { EOL } from 'os'

import type { GenericParser } from '../parser.interface'
import { LoggerService } from '@lib/logger'

@Injectable()
export class EnvironmentVariableParser implements GenericParser {
  public readonly extensions: string[] = ['env']

  constructor(private readonly logger: LoggerService) {
    this.logger.setup(this.constructor.name)
  }

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return parse(data) as T
    } catch(e: any) {
      this.logger.trace('Error during parsing environment file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return (
      Object.entries(data)
        .map(([key, value]) => `${key}=${this.quote(String(value))}`)
        .join(EOL) + EOL
    )
  }

  /** Quotes a value that dotenv would otherwise cut at a line break, a comment or surrounding whitespace, with a quote it does not contain. */
  private quote(value: string): string {
    if (!/[\r\n#'"`]|^\s|\s$/.test(value)) {
      return value
    }

    const quote = ['"', '\'', '`'].find((candidate) => !value.includes(candidate)) ?? '"'

    return `${quote}${value}${quote}`
  }
}
