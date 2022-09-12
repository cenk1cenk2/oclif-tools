import type { LogLevels } from '@utils/logger'

export interface GlobalConfig {
  logLevel: LogLevels

  ci: boolean

  isVerbose: boolean

  isDebug: boolean

  isSilent: boolean

  json: boolean
}
