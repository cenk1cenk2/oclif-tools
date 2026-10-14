import type { Type } from '@nestjs/common'

import type { Command } from './base.command'
import type { InferArgs, InferFlags } from '@interfaces'
import type { CliModuleImport } from '@lib'

export interface CommandInput<T extends typeof Command = typeof Command> {
  flags: InferFlags<T>
  args: InferArgs<T>
  /** aborts on the first SIGINT or SIGTERM, the command closes once the handler returns */
  signal: AbortSignal
}

export interface CommandHandler<T extends typeof Command = typeof Command> {
  run: (input: CommandInput<T>) => Promise<void>
}

export interface UseHandlerOptions<H extends CommandHandler<any> = CommandHandler<any>> {
  /** the root module the command boots, which provides the handler */
  module: CliModuleImport
  handler: Type<H>
}
