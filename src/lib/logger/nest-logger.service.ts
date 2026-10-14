import type { LoggerService as NestLoggerService } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { inspect } from 'util'

import type { LogLevels } from './logger.constants'
import { NEST_LOG_LEVELS } from './logger.constants'
import { LoggerService } from './logger.service'

/** Lets nest log through the command logger, translating its levels and its trailing context argument. */
@Injectable()
export class NestLogger implements NestLoggerService {
  constructor(private readonly logger: LoggerService) {}

  public fatal(message: unknown, ...params: unknown[]): void {
    this.write(NEST_LOG_LEVELS.fatal, message, params)
  }

  public error(message: unknown, ...params: unknown[]): void {
    this.write(NEST_LOG_LEVELS.error, message, params)
  }

  public warn(message: unknown, ...params: unknown[]): void {
    this.write(NEST_LOG_LEVELS.warn, message, params)
  }

  public log(message: unknown, ...params: unknown[]): void {
    this.write(NEST_LOG_LEVELS.log, message, params)
  }

  public debug(message: unknown, ...params: unknown[]): void {
    this.write(NEST_LOG_LEVELS.debug, message, params)
  }

  public verbose(message: unknown, ...params: unknown[]): void {
    this.write(NEST_LOG_LEVELS.verbose, message, params)
  }

  private write(level: LogLevels, message: unknown, params: unknown[]): void {
    this.logger.setup(typeof params.at(-1) === 'string' ? (params.at(-1) as string) : undefined).log(level, typeof message === 'string' ? message : inspect(message))
  }
}
