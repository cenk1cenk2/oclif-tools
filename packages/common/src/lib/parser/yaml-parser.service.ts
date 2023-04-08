import { parse, stringify } from 'yaml'

import type { GenericParser } from './parser.interface'
import { Logger } from '@utils/logger'

export class YamlParser implements GenericParser {
  static extensions: string[] = [ 'yaml', 'yml' ]
  private static instance: YamlParser
  private logger: Logger

  constructor () {
    if (YamlParser.instance) {
      return YamlParser.instance
    }

    YamlParser.instance = this

    this.logger = new Logger(this.constructor.name)

    this.logger.trace('Created a new instance.')
  }

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return parse(data.toString())
    } catch (e: any) {
      this.logger.trace('Error during parsing YAML file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return stringify(data, { prettyErrors: true })
  }
}
