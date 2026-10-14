import { Injectable, OnModuleInit } from '@nestjs/common'
import { set } from 'es-toolkit/compat'

import { ConfigEnvKeys } from './parser.constants'
import type { ConfigIterator } from './parser.interface'
import { ParserService } from './parser.service'
import { LoggerService } from '@lib/logger'
import { MergeStrategy, clonePath, merge } from '@utils'

@Injectable()
export class ConfigLoaderService implements OnModuleInit {
  constructor(
    private readonly parser: ParserService,
    private readonly logger: LoggerService
  ) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public async extend<T = any>(paths: (string | Partial<T>)[], strategy: MergeStrategy = MergeStrategy.OVERWRITE): Promise<T> {
    this.logger.trace('Will generate config from: %o with %s', paths, strategy)

    const configs = (
      await Promise.all(
        paths.map(async(path) => {
          try {
            const config = typeof path === 'string' ? await this.parser.read<Partial<T>>(path) : path

            this.logger.trace('Extending config from: %s', path)

            return config
          } catch(e: any) {
            this.logger.trace('Failed to extend config from: %s', e.message)
          }
        })
      )
    ).filter(Boolean)

    return this.merge<T>(configs, strategy)
  }

  public merge<T = any>(configs: Partial<T>[], strategy: MergeStrategy = MergeStrategy.OVERWRITE): T {
    if (configs.length === 0) {
      throw new Error('Nothing to merge, configuration files are empty.')
    }

    return merge<T>(strategy, ...configs)
  }

  public async env<T = any>(definition: string | Record<PropertyKey, any>, config: T): Promise<T> {
    const env = typeof definition === 'string' ? await this.parser.read<Record<PropertyKey, any>>(definition) : definition

    this.logger.trace('Environment variable extensions read: %o', definition)

    for (const variable of this.variables(env)) {
      if (process.env[variable.env]) {
        config = this.inject(config, variable, process.env[variable.env])
      }

      if (!variable.extensions?.length) {
        continue
      }

      // the elements are numbered without gaps, so there can not be more of them than environment variables
      for (let i = 0; i < Object.keys(process.env).length; i++) {
        const elements = variable.extensions
          .map((extension) => {
            const element = structuredClone(extension)

            element.env = element.env.replace(ConfigEnvKeys.ELEMENT_REPLACER, i.toString())
            element.key[element.key.indexOf(ConfigEnvKeys.ELEMENT)] = i.toString()

            return element
          })
          .filter((element) => process.env[element.env])

        if (elements.length === 0) {
          this.logger.trace('No more extensions for environment variables: %s -> %d', variable.key.join('.'), i)

          break
        }

        for (const element of elements) {
          config = this.inject(config, element, process.env[element.env])
        }
      }
    }

    return config
  }

  private variables(definition: Record<PropertyKey, any>, parent: (string | number)[] = []): ConfigIterator[] {
    return Object.entries(definition).flatMap(([key, value]): ConfigIterator[] => {
      const location = [...parent, key]

      if (typeof value === 'string') {
        return [{ key: location, env: value }]
      } else if (value === null || typeof value !== 'object') {
        return []
      }

      let extensions: ConfigIterator['extensions']

      if (ConfigEnvKeys.ELEMENT in value) {
        extensions = this.variables(value[ConfigEnvKeys.ELEMENT], [...location, ConfigEnvKeys.ELEMENT])

        this.logger.trace('Expanding location to elements: %s -> %s', location, extensions.map((extension) => extension.key.join('.')).join(', '))
      }

      if (ConfigEnvKeys.NAME in value && ConfigEnvKeys.PARSER in value) {
        return [
          {
            key: location,
            env: value[ConfigEnvKeys.NAME],
            parser: value[ConfigEnvKeys.PARSER],
            extensions
          }
        ]
      }

      return this.variables(value, location)
    })
  }

  private inject<T>(config: T, variable: ConfigIterator, data: any): T {
    if (variable.parser) {
      try {
        data = this.parser.parse(variable.parser, data)
      } catch(e: any) {
        this.logger.trace('Can not parse environment variable for config: %s -> %s with %s', variable.key.join('.'), variable.env, variable.parser)

        throw e
      }
    }

    this.logger.trace('Overwriting config with environment variable: %s -> %s', variable.key.join('.'), variable.env)

    return set<T>(clonePath(config, variable.key), variable.key, data)
  }
}
