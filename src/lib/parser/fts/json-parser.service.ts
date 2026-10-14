import { Inject, Injectable, Optional } from '@nestjs/common'

import type { GenericParser, ParserModuleOptions } from '../parser.interface'
import { TOKEN_PARSER_MODULE_OPTIONS } from '../parser.module-definition'
import { LoggerService } from '@lib/logger'

@Injectable()
export class JsonParser implements GenericParser {
  public readonly extensions: string[] = ['json']

  constructor(
    private readonly logger: LoggerService,
    @Optional() @Inject(TOKEN_PARSER_MODULE_OPTIONS) private readonly options: ParserModuleOptions = {}
  ) {
    this.logger.setup(this.constructor.name)
  }

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return JSON.parse(data.toString(), this.options.json?.reviver)
    } catch(e: any) {
      this.logger.trace('Error during parsing JSON file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return JSON.stringify(data, this.options.json?.replacer, this.options.json?.space ?? 2)
  }
}
