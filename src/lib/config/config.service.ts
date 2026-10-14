import { Inject, Injectable } from '@nestjs/common'

import { TOKEN_CONFIG_MODULE_OPTIONS } from './config.constants'
import type { ConfigModuleOptions, GlobalConfig } from './config.interface'
import { LogLevels } from '@lib/logger/logger.constants'

@Injectable()
export class ConfigService {
  public config: GlobalConfig

  constructor(@Inject(TOKEN_CONFIG_MODULE_OPTIONS) options: ConfigModuleOptions) {
    this.config = options.config
  }

  /** Nest reports its own bootstrap and errors only when NEST_LOGS is set, since they are diagnostics of the CLI rather than output of the command. */
  public static isNestLogging(): boolean {
    return ['1', 'true'].includes(process.env.NEST_LOGS?.toLowerCase())
  }

  get isVerbose(): boolean {
    return this.config.logLevel === LogLevels.VERBOSE
  }

  get isDebug(): boolean {
    return [LogLevels.DEBUG, LogLevels.TRACE].includes(this.config.logLevel)
  }

  get isSilent(): boolean {
    return this.config.logLevel === LogLevels.SILENT
  }

  get isJson(): boolean {
    return this.config.isJson
  }
}
