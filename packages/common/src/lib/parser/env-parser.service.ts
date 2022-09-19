import { EOL } from 'os'

import type { GenericParser } from './parser.interface'
import { Logger } from '@utils/logger'

export class EnvironmentVariableParser implements GenericParser {
  static extensions: string[] = [ 'env' ]
  private static instance: EnvironmentVariableParser
  private logger: Logger
  private LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm

  constructor () {
    if (EnvironmentVariableParser.instance) {
      return EnvironmentVariableParser.instance
    }

    EnvironmentVariableParser.instance = this

    this.logger = new Logger(this.constructor.name)

    this.logger.trace('Created a new instance.')
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
    } catch (e) {
      this.logger.trace('Error during parsing environment file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return (
      Object.entries(data)
        .map(([ k, v ]) => `${k}=${v}`)
        .join(EOL) + EOL
    )
  }
}
