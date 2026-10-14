import type { Type } from '@nestjs/common'
import type { StandardSchemaV1 } from '@standard-schema/spec'

import type { Command } from './base.command'
import type { CliModuleImport, CommandContext } from '@lib'

/** A handler, typed with its command or with the schema of its command. */
export interface CommandHandler<T extends typeof Command | StandardSchemaV1 = typeof Command> {
  run: (context: CommandContext<T>) => Promise<void>
}

export interface UseHandlerOptions<H extends { run: (input: any) => Promise<void> } = CommandHandler<any>, S extends StandardSchemaV1 | undefined = StandardSchemaV1 | undefined> {
  /** the root module the command boots, which provides the handler */
  module: CliModuleImport
  handler: Type<H>
  /** validates the parsed `{ flags, args }` before the command boots, its output replacing them in the command context */
  schema?: S
}

/** What UseHandler stores on a command: its options and the flags and args as the command declared them. */
export interface UseHandlerRegistration extends UseHandlerOptions {
  flags: (typeof Command)['flags']
  args: (typeof Command)['args']
}
