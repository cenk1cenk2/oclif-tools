import type { LogLevel } from '@nestjs/common'
import { ConsoleLogger } from '@nestjs/common'

/** Logs what nest reports before the logger of the command takes over, on stderr, away from the output of the command. */
export class NestBootstrapLogger extends ConsoleLogger {
  // a boot failure is thrown to the command, which logs it once through its own logger
  public error(): void {}

  public fatal(): void {}

  protected printMessages(messages: unknown[], context?: string, logLevel?: LogLevel, _?: 'stdout' | 'stderr', errorStack?: unknown, params?: Record<string, any>): void {
    super.printMessages(messages, context, logLevel, 'stderr', errorStack, params)
  }
}
