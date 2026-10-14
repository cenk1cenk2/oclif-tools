import type { ConfigModuleOptions } from './config'
import type { LoggerModuleOptions } from './logger'

export interface CliModuleOptions {
  config: ConfigModuleOptions
  logger?: LoggerModuleOptions
}
