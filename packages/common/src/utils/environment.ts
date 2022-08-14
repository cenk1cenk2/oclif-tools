import { LogLevels } from './logger'
import type { BaseConfig } from '@lib'

export function isVerbose<T extends BaseConfig = BaseConfig> (config: T): boolean {
  return config.loglevel === LogLevels.VERBOSE
}

export function isDebug<T extends BaseConfig = BaseConfig> (config: T): boolean {
  return [ LogLevels.DEBUG, LogLevels.TRACE ].includes(config.loglevel)
}

export function isSilent<T extends BaseConfig = BaseConfig> (config: T): boolean {
  return config.loglevel === LogLevels.SILENT
}
