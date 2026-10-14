import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import type { Command, Config } from '@oclif/core'
import { join } from 'path'

import { TOKEN_CONFIG_MODULE_OPTIONS } from './config.constants'
import type { ConfigModuleOptions, GlobalConfig } from './config.interface'
import { FileConstants } from '@constants'
import { TOKEN_COMMAND, TOKEN_OCLIF_CONFIG } from '@lib/command/command.constants'
import { LoggerService } from '@lib/logger'
import { isDebug, isSilent, isVerbose } from '@utils'

@Injectable()
export class ConfigService implements OnModuleInit {
  public defaults: string
  public root: string
  public config: GlobalConfig
  public oclif: Config
  public command: typeof Command

  constructor(
    private readonly logger: LoggerService,
    @Inject(TOKEN_CONFIG_MODULE_OPTIONS) options: ConfigModuleOptions,
    @Inject(TOKEN_OCLIF_CONFIG) oclif: Config,
    @Inject(TOKEN_COMMAND) command: typeof Command
  ) {
    this.root = oclif.root
    this.defaults = join(oclif.root, FileConstants.CONFIG_SERVICE_DEFAULTS_DIR)
    this.oclif = oclif
    this.config = options.config
    this.command = command
  }

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
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
