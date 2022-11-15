import type { LogLevels } from '@utils/logger'

export interface GlobalConfig {
  logLevel: LogLevels
  ci: boolean
  json: boolean
}

export interface ConfigIterator {
  key: (string | number)[]
  env: string
  parser?: string
  extensions?: ConfigIterator[]
}
