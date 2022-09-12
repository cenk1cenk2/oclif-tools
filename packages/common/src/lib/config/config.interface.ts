import type { LogLevels } from '@utils/logger'

export interface GlobalConfigInit {
  logLevel: LogLevels
  ci: boolean
  json: boolean
}

export interface GlobalConfig extends GlobalConfigInit {
  isVerbose: boolean
  isDebug: boolean
  isSilent: boolean
}

export interface ConfigIterator {
  key: (string | number)[]
  env: string
  parser?: string
}
