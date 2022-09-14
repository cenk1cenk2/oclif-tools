import { Logger as BaseLogger } from 'listr2'

import { Logger } from './logger'

export class ListrLogger extends BaseLogger {
  public logger: Logger

  constructor (context?: string) {
    super()

    this.logger = new Logger(context)
  }

  public fail (message: string): void {
    this.logger.error(message)
  }

  public skip (message: string): void {
    this.logger.warn(message, { status: 'skip' })
  }

  public success (message: string): void {
    this.logger.info(message, { status: 'end' })
  }

  public data (message: string): void {
    this.logger.info(message)
  }

  public start (message: string): void {
    this.logger.info(message, { status: 'run' })
  }

  public title (message: string): void {
    this.logger.info(message)
  }

  public retry (message: string): void {
    this.logger.warn(message, { status: 'retry' })
  }

  public rollback (message: string): void {
    this.logger.warn(message, { status: 'rollback' })
  }
}
