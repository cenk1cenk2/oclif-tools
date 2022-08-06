import config from 'config'
import { dirname, join } from 'path'

import type { BaseConfig } from './config.interface'
import type { Command } from '@commands/base.command'

export class ConfigService<Config extends BaseConfig = BaseConfig> {
  public config: Config
  public command: Command['ctor']
  public oclif: Command['config']
  private configDir = join(dirname(require.main.filename), '../config')

  constructor (command: Command<any, Config>) {
    this.command = command.ctor
    this.oclif = command.config

    this.config = config.util.loadFileConfigs(this.configDir)
    command.logger.trace('Loading user config from %s.', this.oclif.configDir)
    this.config = config.util.extendDeep(this.config, config.util.loadFileConfigs(this.oclif.configDir))
  }
}
