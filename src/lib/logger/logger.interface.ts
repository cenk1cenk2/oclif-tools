import type { LogLevels } from './logger.constants'

export interface LoggerModuleOptions {
  /** levels written to stderr, every other level goes to stdout and the logo follows info, defaults to fatal and error */
  stderr?: LogLevels[]
}

export interface LoggerFormat {
  level: LogLevels
  message: string
  context: string
  status: string
}
