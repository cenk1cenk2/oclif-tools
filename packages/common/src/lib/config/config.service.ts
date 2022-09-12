import op from 'object-path-immutable'
import { join } from 'path'

import { ConfigEnvKeys } from './config.constants'
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

    this.logger.trace('Environment variable extensions read: %s', definition)

    const iter = async (obj: Record<PropertyKey, any>, parent?: string[]): Promise<{ key: string[], env: string, parser?: string }[]> => {
      const data = await Promise.all(
        Object.entries(obj).map(async ([ key, value ]) => {
          const location = [ ...parent ?? [], key ]

          if (typeof value === 'string') {
            return [ { key: location, env: value } ]
          } else if (typeof value === 'object') {
            const extras = []

            if (ConfigEnvKeys.ELEMENT in value) {
              extras.push(await iter(value, [ ...location, ConfigEnvKeys.ELEMENT ]))
            }

            if (ConfigEnvKeys.NAME in value && ConfigEnvKeys.PARSER in value) {
              return [
                {
                  key: location,
                  // eslint-disable-next-line no-underscore-dangle
                  env: value[ConfigEnvKeys.NAME] as string,
                  // eslint-disable-next-line no-underscore-dangle
                  parser: value[ConfigEnvKeys.PARSER] as string
                },
                ...extras
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
          try {
            data = await this.parser.parse(variable.parser, data)
          } catch (e) {
            this.logger.trace('Can not parse environment variable for config: %s -> %s with %s', variable.key.join('.'), variable.env, variable.parser)

            throw e
          }
        }

        if (variable.key.includes(ConfigEnvKeys.ELEMENT)) {
          const timeout = 60000
          const startedAt = Date.now()

          for (let i = 0; i < Infinity; i++) {
            if (Date.now() - startedAt > timeout) {
              throw new Error(`Timed-out in ${timeout}ms while looking for element environment variables.`)
            }

            data = process.env[variable.env.replace('${i}', i.toString())]

            if (!data) {
              this.logger.trace('No more variable available: %s -> %d', variable.env, i)

              break
            }

            const clone = JSON.parse(JSON.stringify(variable.key))

            clone[clone.findIndex(ConfigEnvKeys.ELEMENT)] = i

            config = op.update(config, clone, () => {
              this.logger.trace('Overwriting config with element environment variable: %s -> %s', clone.join('.'), variable.env)

              return data
            })
          }
        } else {
          config = op.update(config, variable.key, () => {
            this.logger.trace('Overwriting config with environment variable: %s -> %s', variable.key.join('.'), variable.env)

            return data
          })
        }
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
