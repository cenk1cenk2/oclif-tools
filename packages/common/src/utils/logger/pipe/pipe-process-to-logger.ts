import type { ExecaChildProcess } from 'execa'
import through from 'through'

import type { Logger } from '../logger'
import { LogLevels } from '../logger.constants'
import type { PipeProcessToLoggerOptions } from './pipe-process-to-logger.interface'

/**
 * Given the instance it will pipe process output through the logger to append prefixes such as the application name.
 */
export function pipeProcessToLogger (logger: Logger, instance: ExecaChildProcess, options?: PipeProcessToLoggerOptions): ExecaChildProcess {
  // default options
  options = {
    start: LogLevels.INFO,
    end: LogLevels.INFO,
    stdout: LogLevels.INFO,
    stderr: LogLevels.WARN,
    ...options
  }

  if (options.start) {
    logger.run(instance.spawnargs.join(' '), { level: this.options.start })
  }

  if (instance.stdout) {
    instance.stdout.pipe(
      through((chunk: string) => {
        logger.log(options.stdout, chunk)
      })
    )
  }

  if (instance.stderr) {
    instance.stderr.pipe(
      through((chunk: string) => {
        logger.log(options.stderr, chunk)
      })
    )
  }

  void instance.on('exit', (code, signal) => {
    const message = `Process ended with code ${code}${signal ? ` and signal ${signal}` : ''}.`

    logger.debug(message)

    if (options.end) {
      logger.end(instance.spawnargs.join(' '), { level: this.options.end })
    }

    if (options?.callback) {
      options.callback()
    }
  })

  void instance.on('error', (error) => {
    logger.fatal(error.message)
    logger.debug(error.stack)

    if (options?.callback) {
      options.callback(error)
    }
  })

  return instance
}
