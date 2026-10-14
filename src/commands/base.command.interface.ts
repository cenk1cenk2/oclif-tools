import type { Type } from '@nestjs/common'
import type { StandardSchemaV1 } from '@standard-schema/spec'

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

export interface UseHandlerOptions<H extends { run: (input: any) => Promise<void> } = CommandHandler<any>, S extends StandardSchemaV1 | undefined = StandardSchemaV1 | undefined> {
  /** the root module the command boots, which provides the handler */
  module: CliModuleImport
  handler: Type<H>
  /** validates the parsed `{ flags, args }` before the command boots, its output replacing them for the modules and the handler */
  schema?: S
}

/** The input of a handler whose command validates with a schema: the output of the schema and the abort signal. */
export type CommandSchemaInput<S extends StandardSchemaV1> = StandardSchemaV1.InferOutput<S> & Pick<CommandInput, 'signal'>

/** What UseHandler stores on a command: its options and the flags and args as the command declared them. */
export interface UseHandlerRegistration extends UseHandlerOptions {
  flags: (typeof Command)['flags']
  args: (typeof Command)['args']
}
