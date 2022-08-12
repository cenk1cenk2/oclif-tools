import { parse, stringify } from 'yaml'

import type { GenericParser } from './parser.interface'
import { Logger } from '@utils/logger'

export class YamlParser implements GenericParser {
  static extensions: string[] = [ 'yaml', 'yml' ]
  private readonly logger = new Logger(this.constructor.name)

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return parse(data.toString())
    } catch (e) {
      this.logger.fatal('Error during parsing YAML file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return stringify(data, { prettyErrors: true })
  }
}
