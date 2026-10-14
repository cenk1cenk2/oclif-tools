import type { InjectionToken } from '@nestjs/common'

export const TOKEN_LOGGER_MODULE_OPTIONS: InjectionToken = Symbol('TOKEN_LOGGER_MODULE_OPTIONS')

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
