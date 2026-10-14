import type { LogLevels } from '@lib'

export interface GlobalConfig {
  logLevel: LogLevels
  isJson: boolean
}

export interface ConfigIterator {
  key: (string | number)[]
  env: string
  parser?: string
  extensions?: ConfigIterator[]
}

export interface ConfigModuleOptions {
  config: GlobalConfig
}
