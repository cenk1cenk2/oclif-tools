import type { ExecaChildProcess } from 'execa'
import { Writable } from 'stream'

import type { PipeProcessToLoggerOptions } from './pipe-process-to-logger.interface'
import type { Logger } from '../logger'
import { LogLevels } from '../logger.constants'

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
    logger.run(instance.spawnargs.join(' '), { level: options.start, context: options.context })
  }

  if (instance.stdout) {
    const writable = new Writable()

    writable.write = (chunk: Buffer | string): boolean => {
      logger.log(options.stdout, chunk, { context: options.context })

      return true
    }

    instance.stdout.pipe(writable)
  }

  if (instance.stderr) {
    const writable = new Writable()

    writable.write = (chunk: Buffer | string): boolean => {
      logger.log(options.stderr, chunk, { context: options.context })

      return true
    }

    instance.stderr.pipe(writable)
  }

  void instance.on('exit', (code, signal) => {
    const message = `Process ended with code ${code}${signal ? ` and signal ${signal}` : ''}.`

    logger.debug(message, { context: options.context })

    if (options.end) {
      logger.end(instance.spawnargs.join(' '), { level: options.end, context: options.context })
    }

    if (options?.callback) {
      options.callback()
    }
  })

  void instance.on('error', (error) => {
    logger.fatal(error.message, { context: options.context })
    logger.debug(error.stack, { context: options.context })

    if (options?.callback) {
      options.callback(error)
    }
  })

  return instance
}
