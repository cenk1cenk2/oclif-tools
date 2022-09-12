import op from 'object-path-immutable'
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

    this.logger.trace('Read config from: %s', path)

    return config
  }

  public async extend<T extends LockableData = LockableData>(paths: string[], strategy: MergeStrategy = MergeStrategy.OVERWRITE): Promise<T> {
    this.logger.trace('Will generate config from: %s with %s', paths.join(', '), strategy)

    const configs = (
      await Promise.all(
        paths.map(async (path) => {
          try {
            const config = await this.parser.read<Partial<T>>(path)

            this.logger.trace('Extending config from: %s', path)

            return config
          } catch (e) {
            this.logger.trace('Failed to extend config from: %s', e)

            return {}
          }
        })
      )
    ).filter(Boolean)

    return merge<T>(strategy, configs.some((config) => Array.isArray(config)) ? ([] as T) : {} as T, ...configs)
  }

  public async env<T extends LockableData = LockableData>(definition: string, config: T): Promise<T> {
    const env = await this.parser.read<T>(definition)

    const iter = async (obj: Record<PropertyKey, any>, parent?: string[]): Promise<{ key: string[], env: string, parser?: string }[]> => {
      const data = await Promise.all(
        Object.entries(obj).map(async ([ key, value ]) => {
          const location = [ ...parent ?? [], key ]

          if (typeof value === 'string') {
            return [ { key: location, env: value } ]
          } else if (typeof value === 'object') {
            if ('__name' in value && '__format' in value) {
              return [
                {
                  key: location,
                  // eslint-disable-next-line no-underscore-dangle
                  env: value.__name as string,
                  // eslint-disable-next-line no-underscore-dangle
                  parser: value.__format as string
                }
              ]
            } else {
              return iter(value, location)
            }
          }
        })
      )

      return data.flatMap((d) => d)
    }

    const parsed = await iter(env)

    await Promise.all(
      parsed.map(async (variable) => {
        let data = process.env[variable.env]

        if (!data) {
          return
        }

        if (variable.parser) {
          data = await this.parser.parse(variable.parser, data)
        }

        config = op.update(config, variable.key, () => {
          this.logger.trace('Overwriting config with environment variable: %s -> %s', variable.key.join(', '), variable.env)

          return data
        })
      })
    )

    return config
  }

  public async write<T extends LockableData = LockableData>(path: string, data: T): Promise<void> {
    return this.parser.write(path, data)
  }

  // private walk <T extends LockableData = LockableData>(data:T)

  private recalculate (): void {
    this.isVerbose = isVerbose(this.logLevel)
    this.isDebug = isDebug(this.logLevel)
    this.isSilent = isSilent(this.logLevel)
  }
}
