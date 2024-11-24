import { LogLevels } from '@lib/logger'

export function isVerbose(logLevel: LogLevels): boolean {
  return logLevel === LogLevels.VERBOSE
}

export function isDebug(logLevel: LogLevels): boolean {
  return [LogLevels.DEBUG, LogLevels.TRACE].includes(logLevel)
}

export function isSilent(logLevel: LogLevels): boolean {
  return logLevel === LogLevels.SILENT
}
