import { join } from 'path'

import type { GlobalConfig } from './config.interface'
import type { Command } from '@commands/base.command'
import { FileConstants } from '@constants'
import type { LockableData } from '@lib/locker'
import { ParserService } from '@lib/parser/parser.service'
import { merge, MergeStrategy, isDebug, isSilent, isVerbose } from '@utils'
import type { LogLevels } from '@utils/logger'
import { Logger } from '@utils/logger'

export class ConfigService implements GlobalConfig {
  static instance: ConfigService
  public defaults: string
  public root: string
  public parser: ParserService
  public logLevel: LogLevels
  public isVerbose: boolean
  public isDebug: boolean
  public isSilent: boolean
  public ci: boolean
  public json: boolean
  private readonly logger: Logger

  constructor (public oclif: Command['config'], public command: Command['ctor'], config: Omit<GlobalConfig, 'isVerbose' | 'isDebug' | 'isSilent'>) {
    if (ConfigService.instance) {
      // config might be updated?
      Object.assign(ConfigService.instance, config)

      return ConfigService.instance
    } else {
      ConfigService.instance = this
    }

    this.root = this.oclif.root
    this.defaults = join(this.oclif.root, FileConstants.CONFIG_SERVICE_DEFAULTS_DIR)

    this.logger = new Logger(this.constructor.name, { level: config.logLevel })

    this.parser = new ParserService()

    Object.assign(ConfigService.instance, config)

    this.recalculate()

    this.logger.trace('Created a new instance.')
  }

  public async read<T extends LockableData = LockableData>(path: string): Promise<T> {
    const config = await this.parser.read<T>(path)

    return config
  }

  public async extend<T extends LockableData = LockableData>(paths: string[], strategy: MergeStrategy = MergeStrategy.OVERWRITE): Promise<T> {
    const configs = await Promise.all(
      paths.map(async (path) => {
        try {
          const config = await this.parser.read<Partial<T>>(path)

          return config
        } catch (e) {
          this.logger.trace(e)

          return {}
        }
      })
    )

    return merge<T>(strategy, {} as T, ...configs)
  }

  public async write<T extends LockableData = LockableData>(path: string, data: T): Promise<void> {
    return this.parser.write(path, data)
  }

  private recalculate (): void {
    this.isVerbose = isVerbose(this.logLevel)
    this.isDebug = isDebug(this.logLevel)
    this.isSilent = isSilent(this.logLevel)
  }
}
