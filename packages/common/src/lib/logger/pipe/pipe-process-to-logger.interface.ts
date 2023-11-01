import type { LogLevels } from '../logger.constants'

export interface PipeProcessToLoggerOptions {
  /** Will log the command when the process starts. */
  start?: LogLevels
  /** Will log the command when the process ends. */
  end?: LogLevels
  /** enable/disable stdout */
  stdout?: LogLevels
  /** enable/disable stderrr */
  stderr?: LogLevels
  /** will callback on error in the instance */
  callback?: (error?: Error) => void
  /** context for logger */
  context?: string
}
