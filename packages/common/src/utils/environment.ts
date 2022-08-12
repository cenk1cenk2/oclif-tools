import { LogLevels } from './logger'
import type { BaseConfig } from '@lib'

export function isDebug<T extends BaseConfig = BaseConfig> (config: T): boolean {
  return config.loglevel === LogLevels.DEBUG
}

export function isSilent<T extends BaseConfig = BaseConfig> (config: T): boolean {
  return config.loglevel === LogLevels.SILENT
}
