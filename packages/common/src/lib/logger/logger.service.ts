import { Inject, Injectable, Scope } from '@nestjs/common'
import { color, figures, splat } from 'listr2'
import { EOL } from 'os'
import { format } from 'util'

import { LogFieldStatus, LogLevels, TOKEN_LOGGER_MODULE_OPTIONS } from './logger.constants'
import type { LoggerFormat, LoggerModuleOptions } from './logger.interface'
import type { ConfigModuleOptions } from '@lib'
import { TOKEN_CONFIG_MODULE_OPTIONS } from '@lib/config/config.constants'

/**
 * A general logger for the the CLI applications.
 */
@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
  public context: string

  constructor(
    @Inject(TOKEN_CONFIG_MODULE_OPTIONS) private readonly options: ConfigModuleOptions,
    @Inject(TOKEN_LOGGER_MODULE_OPTIONS) private readonly loggerOptions: LoggerModuleOptions
  ) {}

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

  private parseMessage(level: LogLevels, data: string | Buffer, args: any[] = [], fields: Partial<LoggerFormat> = {}): void {
    const levels = Object.values(LogLevels)

    // nest calls log(message, context) once this is its logger, so anything that is not a level is not ours to print
    if (
      !levels.includes(level) ||
      this.options.config.logLevel === LogLevels.SILENT ||
      this.options.config.isJson ||
      levels.indexOf(level) > levels.indexOf(this.options.config.logLevel)
    ) {
      return
    }

    const message = data.toString()
    const tokens = (message.match(/%[scdjifoO%]/g) ?? []).filter((token) => token !== '%%').length
    // arguments past the placeholders are metadata, a level or status in them restyles the line while the own context always wins
    const meta: Partial<LoggerFormat> = Object.assign({}, ...args.slice(tokens).filter((arg) => typeof arg === 'object' && arg !== null), { context: this.context, ...fields })

    const stream = this.loggerOptions.stderr || level === LogLevels.FATAL || level === LogLevels.ERROR ? process.stderr : process.stdout

    stream.write(
      format(message, ...args.slice(0, tokens))
        .split(EOL)
        .filter((line) => !line || line.trim() !== '')
        .map((line) =>
          this.logColoring({
            level: meta.level ?? level,
            message: line,
            context: meta.context,
            status: meta.status
          })
        )
        .join(EOL) + EOL
    )
  }

  private logColoring({ level, message, context, status }: LoggerFormat): string {
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
        coloring = color.red
        msgColoring = color.red

        break

      case LogLevels.ERROR:
        coloring = color.red

        icon = figures.cross

        break

      case LogLevels.WARN:
        coloring = color.yellow

        icon = figures.warning

        break

      case LogLevels.INFO:
        coloring = color.green

        icon = figures.pointerSmall

        break

      case LogLevels.VERBOSE:
        coloring = color.dim

        break

      case LogLevels.DEBUG:
        coloring = color.cyan
        msgColoring = color.dim

        break

      case LogLevels.TRACE:
        coloring = color.magenta
        msgColoring = color.dim

        break
    }

    if (!icon) {
      icon = `[${level.at(0).toUpperCase()}]`
    }

    return `${coloring(icon)}${context ? ' ' + coloring(`[${context}]`) : ''}${status ? ' ' + coloring(`[${status}]`) : ''} ${msgColoring(message)}`
  }
}
