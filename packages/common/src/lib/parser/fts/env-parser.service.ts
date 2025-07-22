import { Injectable, OnModuleInit } from '@nestjs/common'
import { EOL } from 'os'

import type { GenericParser } from '../parser.interface'
import { LoggerService } from '@lib/logger'

@Injectable()
export class EnvironmentVariableParser implements GenericParser, OnModuleInit {
  public readonly extensions: string[] = ['env']

  private readonly LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm

  constructor(private readonly logger: LoggerService) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return data
        .toString()
        .split(EOL)
        .reduce((o, line) => {
          const match = this.LINE.exec(line)

          const key = match[1]
          const value = match[2] ?? ''

          return {
            ...o,
            [key]: value
          }
        }, {}) as T
    } catch(e: any) {
      this.logger.trace('Error during parsing environment file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return (
      Object.entries(data)
        .map(([k, v]) => `${k}=${v}`)
        .join(EOL) + EOL
    )
  }
}
