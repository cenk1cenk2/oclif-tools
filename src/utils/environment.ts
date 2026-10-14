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

/** Nest reports its own bootstrap and errors only when NEST_LOGS is set, since they are diagnostics of the CLI rather than output of the command. */
export function isNestLogging(): boolean {
  return ['1', 'true'].includes(process.env.NEST_LOGS?.toLowerCase())
}
