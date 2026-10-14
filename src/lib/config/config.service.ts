import { Inject, Injectable } from '@nestjs/common'

import { TOKEN_CONFIG_MODULE_OPTIONS } from './config.constants'
import type { ConfigModuleOptions, GlobalConfig } from './config.interface'
import { isDebug, isSilent, isVerbose } from '@utils'

@Injectable()
export class ConfigService {
  public config: GlobalConfig

  constructor(@Inject(TOKEN_CONFIG_MODULE_OPTIONS) options: ConfigModuleOptions) {
    this.config = options.config
  }

  get isVerbose(): boolean {
    return isVerbose(this.config.logLevel)
  }

  get isDebug(): boolean {
    return isDebug(this.config.logLevel)
  }

  get isSilent(): boolean {
    return isSilent(this.config.logLevel)
  }

  get isJson(): boolean {
    return this.config.isJson
  }
}
