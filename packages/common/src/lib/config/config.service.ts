import type { Command as BaseCommand } from '@oclif/core'
import config from 'config'
import { join, dirname } from 'path'

import type { BaseConfig } from './config.interface'
import type { Command } from '@commands/base.command'

export class ConfigService<Config extends BaseConfig = BaseConfig> {
  public config: Config
  public command: BaseCommand['ctor']
  public oclif: BaseCommand['config']

  constructor (command: Command) {
    this.command = command.ctor
    this.oclif = command.config

    this.config = config.util.loadFileConfigs(join(dirname(require.main.filename), '../config'))
  }
}
