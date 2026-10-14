import type { LogLevel } from '@nestjs/common'

export enum LogLevels {
  SILENT = 'SILENT',
  DIRECT = 'DIRECT',
  FATAL = 'FATAL',
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  VERBOSE = 'VERBOSE',
  DEBUG = 'DEBUG',
  TRACE = 'TRACE'
}

export enum LogFieldStatus {
  RUN = 'run',
  END = 'end',
  STAGE = 'stage',
  EXIT = 'exit',
  TERMINATE = 'terminate'
}

/** The level of the command logger that each level of nest logs at. */
export const NEST_LOG_LEVELS: Record<LogLevel, LogLevels> = {
  fatal: LogLevels.FATAL,
  error: LogLevels.ERROR,
  warn: LogLevels.WARN,
  log: LogLevels.VERBOSE,
  debug: LogLevels.DEBUG,
  verbose: LogLevels.TRACE
}
