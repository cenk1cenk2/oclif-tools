import type { Logger as WinstonLogger, LeveledLogMethod } from 'winston'

import type { LogLevels } from './logger.constants'

export interface LoggerOptions {
  useIcons?: boolean
  level?: LogLevels
}

export interface LoggerFormat {
  level: LogLevels
  message: string
  context: string
  status: string
}

export type Winston = WinstonLogger & Record<keyof typeof LogLevels, LeveledLogMethod>
