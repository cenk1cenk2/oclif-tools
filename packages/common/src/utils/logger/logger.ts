import { figures, color, splat } from 'listr2'
import { EOL } from 'os'
import winston, { format, transports } from 'winston'

import { LogFieldStatus, LogLevels } from './logger.constants'
import type { LoggerFormat, LoggerOptions, Winston } from './logger.interface'
import { ConfigService } from '@lib'

/**
 * A general logger for the the CLI applications.
 */
export class Logger {
  private static instance: Winston
  private logger: Winston

  constructor (private context?: string, private options?: LoggerOptions) {
    if (Logger.instance && context !== ConfigService.name) {
      this.logger = Logger.instance

      return this
    }

    const l = process.env.LOG_LEVEL ?? options?.level

    const level: LogLevels = Object.values(LogLevels).includes(l as LogLevels) ? (l as LogLevels) : LogLevels.INFO

    // set default options
    this.options = {
      useIcons: true,
      ...options,
      level
    }

    this.logger = this.initiateLogger()

    this.trace('Logger singleton initiated from context: %s', context)

    Logger.instance = this.logger
  }

  public log (level: LogLevels, data: string | Buffer, ...args: any): void {
    return this.parseMessage(level, data, args)
  }

  public direct (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.DIRECT, data, args)
  }

  public fatal (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.FATAL, data, args)
  }

  public error (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.ERROR, data, args)
  }

  public warn (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.WARN, data, args)
  }

  public info (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.INFO, data, args)
  }

  public debug (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.DEBUG, data, args)
  }

  public verbose (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.VERBOSE, data, args)
  }

  public trace (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.TRACE, data, args)
  }

  // status levels
  public run (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.INFO, data, args, { status: LogFieldStatus.RUN })
  }

  public end (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.INFO, data, args, { status: LogFieldStatus.END })
  }

  public stage (data: string | Buffer, ...args: any): void {
    return this.parseMessage(LogLevels.TRACE, data, args, { status: LogFieldStatus.STAGE })
  }

  public splat (...args: Parameters<typeof splat>): ReturnType<typeof splat> {
    const message = args.shift()

    if (typeof message === 'undefined') {
      return ''
    }

    if (args.length === 0) {
      return message
    }

    return splat(message, args)
  }

  private initiateLogger (): Winston {
    const logFormat = format.printf(({ level, message, context, status }: LoggerFormat) => {
      return message
        .split(EOL)
        .filter((msg) => !msg || msg.trim() !== '')
        .map((msg) => {
          // format messages
          return this.logColoring({
            level,
            message: msg,
            context,
            status
          })
        })
        .join(EOL)
    })

    const logger = winston.createLogger({
      level: this.options.level,
      format: format.combine(format.splat(), format.json({ space: 2 }), format.prettyPrint(), logFormat),
      levels: Object.fromEntries(
        Object.values(LogLevels).map((level, i) => {
          return [ level, i ]
        })
      ),
      silent: this.options.level === LogLevels.SILENT,
      transports: [
        new transports.Console({
          stderrLevels: [ LogLevels.FATAL, LogLevels.ERROR ]
        })
      ]
    })

    logger.log(LogLevels.TRACE, 'Initiated new logger with level: %s', this.options.level, { context: this.constructor.name })

    return logger as Winston
  }

  private parseMessage (level: LogLevels, data: string | Buffer, args?: any[], format?: Partial<LoggerFormat>): void {
    if (!this.logger && !Logger.instance) {
      return
    } else if (Logger.instance) {
      this.logger = Logger.instance
    }

    this.logger.log(level, data.toString(), ...args ?? [], { context: this.context, ...format ?? {} })
  }

  private logColoring ({ level, message, context, status }: LoggerFormat): string {
    let icon: string

    // do the coloring
    let coloring = (input: string): string => {
      return input
    }

    let msgColoring = (input: string): string => {
      return input
    }

    switch (level) {
    case LogLevels.DIRECT:
      return message

    case LogLevels.FATAL:
      coloring = (input): string => color.red(input)

      if (this.options?.useIcons) {
        icon = figures.checkboxOn
      }

      break

    case LogLevels.ERROR:
      coloring = color.red

      if (this.options?.useIcons) {
        icon = figures.cross
      }

      break

    case LogLevels.WARN:
      coloring = color.yellow

      if (this.options?.useIcons) {
        icon = figures.warning
      }

      break

    case LogLevels.INFO:
      coloring = color.green

      if (this.options?.useIcons) {
        icon = figures.pointerSmall
      }

      break

    case LogLevels.VERBOSE:
      coloring = color.dim

      if (this.options?.useIcons) {
        icon = '☇'
      }

      break

    case LogLevels.DEBUG:
      coloring = color.cyan
      msgColoring = color.dim

      if (this.options?.useIcons) {
        icon = ''
      }

      break

    case LogLevels.TRACE:
      coloring = color.magenta
      msgColoring = color.dim

      if (this.options?.useIcons) {
        icon = '⚱'
      }

      break
    }

    if (!icon) {
      icon = `[${level.at(0).toUpperCase()}]`
    }

    return `${coloring(icon)}${context ? ' ' + coloring(`[${context}]`) : ''}${status ? ' ' + coloring(`[${status}]`) : ''} ${msgColoring(message)}`
  }
}
