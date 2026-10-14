import type { Command } from './base.command'
import type { InferArgs, InferFlags } from '@interfaces'

export interface CommandInput<T extends typeof Command = typeof Command> {
  flags: InferFlags<T>
  args: InferArgs<T>
  /** aborts on the first SIGINT or SIGTERM, the command closes once the handler returns */
  signal: AbortSignal
}

export interface CommandHandler<T extends typeof Command = typeof Command> {
  run: (input: CommandInput<T>) => Promise<void>
}
