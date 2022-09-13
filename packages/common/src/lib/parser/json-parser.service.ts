import type { GenericParser } from './parser.interface'
import { Logger } from '@utils/logger'

export class JsonParser implements GenericParser {
  static extensions: string[] = [ 'json' ]
  static instance: JsonParser
  private readonly logger = new Logger(this.constructor.name)

  constructor () {
    if (JsonParser.instance) {
      return JsonParser.instance
    } else {
      JsonParser.instance = this

      this.logger.trace('Created a new instance.')
    }
  }

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return JSON.parse(data.toString())
    } catch (e) {
      this.logger.trace('Error during parsing JSON file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return JSON.stringify(data, null, 2)
  }
}
