import { Inject, Injectable, Optional } from '@nestjs/common'
import { parse, stringify } from 'yaml'

import type { GenericParser, ParserModuleOptions } from '../parser.interface'
import { TOKEN_PARSER_MODULE_OPTIONS } from '../parser.module-definition'
import { LoggerService } from '@lib/logger'

@Injectable()
export class YamlParser implements GenericParser {
  public readonly extensions: string[] = ['yaml', 'yml']

  constructor(
    private readonly logger: LoggerService,
    @Optional() @Inject(TOKEN_PARSER_MODULE_OPTIONS) private readonly options: ParserModuleOptions = {}
  ) {
    this.logger.setup(this.constructor.name)
  }

  public parse<T = unknown>(data: string | Buffer): T {
    try {
      return parse(data.toString(), this.options.yaml?.parse)
    } catch(e: any) {
      this.logger.trace('Error during parsing YAML file: %s', e.message)

      throw e
    }
  }

  public stringify<T = any>(data: T): string {
    return stringify(data, { prettyErrors: true, ...this.options.yaml?.stringify })
  }
}
