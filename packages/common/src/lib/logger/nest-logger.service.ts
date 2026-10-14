import type { LoggerService as NestLoggerService } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { inspect } from 'util'

import { LogLevels } from './logger.constants'
import { LoggerService } from './logger.service'

/** Lets nest log through the command logger, translating its levels and its trailing context argument. */
@Injectable()
export class NestLogger implements NestLoggerService {
  constructor(private readonly logger: LoggerService) {}

  public fatal(message: unknown, ...params: unknown[]): void {
    this.write(LogLevels.FATAL, message, params)
  }

  public error(message: unknown, ...params: unknown[]): void {
    this.write(LogLevels.ERROR, message, params)
  }

  public warn(message: unknown, ...params: unknown[]): void {
    this.write(LogLevels.WARN, message, params)
  }

  public log(message: unknown, ...params: unknown[]): void {
    this.write(LogLevels.VERBOSE, message, params)
  }

  public debug(message: unknown, ...params: unknown[]): void {
    this.write(LogLevels.DEBUG, message, params)
  }

  public verbose(message: unknown, ...params: unknown[]): void {
    this.write(LogLevels.TRACE, message, params)
  }

  private write(level: LogLevels, message: unknown, params: unknown[]): void {
    this.logger.setup(typeof params.at(-1) === 'string' ? (params.at(-1) as string) : undefined).log(level, typeof message === 'string' ? message : inspect(message))
  }
}
