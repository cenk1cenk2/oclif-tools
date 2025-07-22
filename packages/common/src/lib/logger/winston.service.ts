import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { color, figures } from 'listr2'
import { EOL } from 'os'
import winston, { format, transports } from 'winston'

import { LogLevels } from './logger.constants'
import type { LoggerFormat, Winston } from './logger.interface'
import type { ConfigModuleOptions } from '@lib'
import { TOKEN_CONFIG_MODULE_OPTIONS } from '@lib/config/config.constants'

@Injectable()
export class WinstonService implements OnModuleInit {
  public instance: Winston

  constructor(@Inject(TOKEN_CONFIG_MODULE_OPTIONS) private readonly options: ConfigModuleOptions) {}

  public onModuleInit(): void {
    this.instance = this.initiateLogger()
  }

  private initiateLogger(): Winston {
    const logFormat = format.printf((({ level, message, context, status }: LoggerFormat) => {
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
    }) as any)

    const logger = winston.createLogger({
      level: this.options.config.logLevel,
      format: format.combine(format.splat(), format.json({ space: 2 }), format.prettyPrint(), logFormat),
      levels: Object.fromEntries(
        Object.values(LogLevels).map((level, i) => {
          return [level, i]
        })
      ),
      silent: this.options.config.logLevel === LogLevels.SILENT || this.options.config.isJson,
      transports: [
        new transports.Console({
          stderrLevels: [LogLevels.FATAL, LogLevels.ERROR]
        })
      ]
    })

    logger.log(LogLevels.TRACE, 'Initiated new winston with level: %s', this.options.config.logLevel, { context: this.constructor.name })

    return logger as Winston
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
