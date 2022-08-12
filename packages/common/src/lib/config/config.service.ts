import config from 'config'
import './config.d'
import { dirname, join } from 'path'

import type { BaseConfig } from './config.interface'
import type { Command } from '@commands/base.command'
import { FileConstants } from '@constants'
import type { LockableData } from '@lib/locker'
import { ParserService } from '@lib/parser/parser.service'
import type { MergeStrategy } from '@utils'
import { merge } from '@utils'
import { Logger } from '@utils/logger'

export class ConfigService<Config extends BaseConfig = BaseConfig> {
  static instance: ConfigService<any>
  public config: Config
  public command: Command['ctor']
  public oclif: Command['config']
  public defaults = join(dirname(require.main.filename), '../config', FileConstants.CONFIG_SERVICE_DEFAULTS_DIR)
  public dir = join(dirname(require.main.filename), '../config')
  public parser: ParserService
  private readonly logger: Logger

  constructor (command: Command<any, Config>) {
    if (ConfigService.instance) {
      return ConfigService.instance
    } else {
      ConfigService.instance = this
    }

    this.command = command.ctor
    this.oclif = command.config

    this.config = config.util.loadFileConfigs(this.dir)

    this.logger = new Logger(this.constructor.name, { level: this.config.loglevel })

    this.parser = new ParserService()

    this.logger.trace('Created a new instance.')
  }

  public async read<T extends LockableData = LockableData>(strategy: MergeStrategy, ...paths: string[]): Promise<T> {
    const configs = await Promise.all(
      paths.map(async (path) => {
        return this.parser.read<Partial<T>>(path)
      })
    )

    return merge<T>(strategy, {} as T, ...configs)
  }

  public async write<T extends LockableData = LockableData>(path: string, data: T): Promise<void> {
    return this.parser.write(path, data)
  }
}

export { config }
