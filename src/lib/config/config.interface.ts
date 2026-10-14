import type { LogLevels } from '@lib'

export interface GlobalConfig {
  logLevel: LogLevels
  isJson: boolean
}

export interface ConfigModuleOptions {
  config: GlobalConfig
}
