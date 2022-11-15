import op from 'object-path-immutable'
import { join } from 'path'

import { ConfigEnvKeys } from './config.constants'
import type { ConfigIterator, GlobalConfig } from './config.interface'
import type { Command } from '@commands/base.command'
import { FileConstants } from '@constants'
import type { LockableData } from '@lib/locker'
import { ParserService } from '@lib/parser/parser.service'
import { isDebug, isSilent, isVerbose, merge, MergeStrategy } from '@utils'
import type { LogLevels } from '@utils/logger'
import { Logger } from '@utils/logger'

export class ConfigService implements GlobalConfig {
  private static instance: ConfigService
  public defaults: string
  public root: string
  public parser: ParserService
  public logLevel: LogLevels
  public isVerbose: boolean
  public isDebug: boolean
  public isSilent: boolean
  public ci: boolean
  public json: boolean
  private logger: Logger

  constructor (public oclif: Command['config'], public command: Command['ctor'], config: GlobalConfig) {
    if (ConfigService.instance) {
      // // config might be updated?
      // if (Object.entries(config).some(([ key, value ]) => value !== ConfigService.instance[key])) {
      //   ConfigService.instance.recalculate(config)
      // }

      return ConfigService.instance
    }

    this.root = this.oclif.root
    this.defaults = join(this.oclif.root, FileConstants.CONFIG_SERVICE_DEFAULTS_DIR)

    this.logger = new Logger(this.constructor.name, { level: config.logLevel })

    Object.assign(this, config)
    this.recalculate()

    this.parser = new ParserService()

    ConfigService.instance = this

    this.logger.trace('Created a new instance.')
  }

  public async read<T extends LockableData = LockableData>(path: string): Promise<T> {
    const config = await this.parser.read<T>(path)

    this.logger.trace('Read config from: %s', path)

    return config
  }

  public async extend<T extends LockableData = LockableData>(paths: (string | Partial<T>)[], strategy: MergeStrategy = MergeStrategy.OVERWRITE): Promise<T> {
    this.logger.trace('Will generate config from: %o with %s', paths, strategy)

    const configs = (
      await Promise.all(
        paths.map(async (path) => {
          try {
            const config = typeof path === 'string' ? await this.parser.read<Partial<T>>(path) : path

            this.logger.trace('Extending config from: %s', path)

            return config
          } catch (e) {
            this.logger.trace('Failed to extend config from: %s', e.message)
          }
        })
      )
    ).filter(Boolean)

    return this.merge<T>(configs, strategy)
  }

  public merge<T extends LockableData = LockableData>(configs: Partial<T>[], strategy: MergeStrategy = MergeStrategy.OVERWRITE): T {
    if (configs.length === 0) {
      throw new Error('Nothing to merge, configuration files are empty.')
    }

    return merge<T>(strategy, ...configs)
  }

  public async env<T extends LockableData = LockableData>(definition: string | Record<PropertyKey, any>, config: T): Promise<T> {
    const env = typeof definition === 'string' ? await this.parser.read<T>(definition) : definition

    this.logger.trace('Environment variable extensions read: %o', definition)

    const iter = async (obj: Record<PropertyKey, any>, parent?: string[]): Promise<ConfigIterator[]> => {
      const data = await Promise.all(
        Object.entries(obj).map(async ([ key, value ]) => {
          const location = [ ...parent ?? [], key ]

          if (typeof value === 'string') {
            return [ { key: location, env: value } ]
          } else if (typeof value === 'object') {
            let extensions: ConfigIterator['extensions']

            if (ConfigEnvKeys.ELEMENT in value) {
              extensions = await iter(value[ConfigEnvKeys.ELEMENT], [ ...location, ConfigEnvKeys.ELEMENT ])

              this.logger.trace('Expanding location to elements: %s -> %s', location, extensions.map((extension) => extension.key.join('.')).join(', '))
            }

            if (ConfigEnvKeys.NAME in value && ConfigEnvKeys.PARSER in value) {
              const variable = [
                {
                  key: location,
                  // eslint-disable-next-line no-underscore-dangle
                  env: value[ConfigEnvKeys.NAME] as string,
                  // eslint-disable-next-line no-underscore-dangle
                  parser: value[ConfigEnvKeys.PARSER] as string,
                  extensions
                }
              ]

              // this.logger.trace('Added to search for environment variables: %o', variable)

              return variable
            } else {
              return iter(value, location)
            }
          }
        })
      )

      return data.flatMap((d) => d).filter(Boolean)
    }

    const parsed = await iter(env)

    // this.logger.trace('Environment variable injection: %o', parsed)

    const cb = (config: T, variable: ConfigIterator, data: any): T => {
      if (variable.parser) {
        try {
          data = this.parser.parse(variable.parser, data)
        } catch (e) {
          this.logger.trace('Can not parse environment environment variable for config: %s -> %s with %s', variable.key.join('.'), variable.env, variable.parser)

          throw e
        }
      }

      this.logger.trace('Overwriting config with environment variable: %s -> %s', variable.key.join('.'), variable.env)

      return op.set(config, variable.key, data)
    }

    parsed.forEach((variable) => {
      let data: string

      data = process.env[variable.env]

      if (data) {
        config = cb(config, variable, data)
      }

      if (variable.extensions && variable.extensions.length > 0) {
        const timeout = 60000
        const startedAt = Date.now()

        for (let i = 0; i < Infinity; i++) {
          if (Date.now() - startedAt > timeout) {
            throw new Error(`Timed-out in ${timeout}ms while looking for element environment variables.`)
          }

          const extensions = variable.extensions
            .map((extension) => {
              const clone = JSON.parse(JSON.stringify(extension)) as ConfigIterator

              clone.env = clone.env.replace(ConfigEnvKeys.ELEMENT_REPLACER, i.toString())
              clone.key[clone.key.findIndex((value) => value === ConfigEnvKeys.ELEMENT)] = i.toString()

              data = process.env[clone.env]

              // this.logger.trace('Extension: %o -> %s', clone, data)

              if (!data) {
                this.logger.trace('No extension for environment variable: %s -> %s', clone.key.join('.'), clone.env)

                return
              }

              config = cb(config, clone, data)

              return true
            })
            .filter(Boolean)

          if (extensions.length === 0) {
            this.logger.trace('No more extensions for environment variables: %s -> %d', variable.key.join('.'), i)

            break
          }
        }
      }
    })

    return config
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
