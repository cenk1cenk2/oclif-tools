import { Injectable, Scope } from '@nestjs/common'
import { splat } from 'listr2'

import { LogFieldStatus, LogLevels } from './logger.constants'
import type { LoggerFormat } from './logger.interface'
import { WinstonService } from './winston.service'

/**
 * A general logger for the the CLI applications.
 */
@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
  public context: string

  constructor(private readonly winston: WinstonService) {}

  public setup(context: string): LoggerService {
    this.context = context

    return this
  }

  public log(level: LogLevels, data: string | Buffer, ...args: any): void {
    return this.parseMessage(level, data, args)
  }

  public direct(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.DIRECT, data, args)
  }

  public fatal(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.FATAL, data, args)
  }

  public error(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.ERROR, data, args)
  }

  public warn(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.WARN, data, args)
  }

  public info(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.INFO, data, args)
  }

  public verbose(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.VERBOSE, data, args)
  }

  public debug(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.DEBUG, data, args)
  }

  public trace(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.TRACE, data, args)
  }

  // status levels
  public run(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.INFO, data, args, { status: LogFieldStatus.RUN })
  }

  public end(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.INFO, data, args, { status: LogFieldStatus.END })
  }

  public stage(data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.TRACE, data, args, { status: LogFieldStatus.STAGE })
  }

  public splat(...args: Parameters<typeof splat>): ReturnType<typeof splat> {
    const message = args.shift()

    if (typeof message === 'undefined') {
      return ''
    }

    if (args.length === 0) {
      return message
    }

    return splat(message, args)
  }

  private parseMessage(level: LogLevels, data: string | Buffer, args?: any[], format?: Partial<LoggerFormat>): void {
    this.winston.instance.log(level, data.toString(), ...(args ?? []), { context: this.context, ...(format ?? {}) })
  }
}
