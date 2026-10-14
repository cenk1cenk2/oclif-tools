import type { Command } from '@oclif/core'

import type { InferArgs, InferFlags } from '@interfaces'

export interface CommandInput<T extends typeof Command = typeof Command> {
  flags: InferFlags<T>
  args: InferArgs<T>
}

export interface CommandHandler<T extends typeof Command = typeof Command> {
  run: (input: CommandInput<T>) => Promise<void>
}
