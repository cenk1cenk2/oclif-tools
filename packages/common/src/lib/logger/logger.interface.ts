import type { LogLevels } from './logger.constants'

export interface LoggerModuleOptions {
  /** writes every log level and the logo to stderr, keeping stdout for the output of the command */
  stderr?: boolean
}

export interface LoggerFormat {
  level: LogLevels
  message: string
  context: string
  status: string
}
