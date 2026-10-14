import type { Config } from '@oclif/core'
import type { StandardSchemaV1 } from '@standard-schema/spec'

import type { Command } from '@commands'
import type { InferArgs, InferFlags } from '@interfaces'

/** The input of a command: its parsed flags and args, or the output of the schema it validates them with. */
export type CommandContextInput<T> = T extends StandardSchemaV1 ? StandardSchemaV1.InferOutput<T> : T extends typeof Command ? { flags: InferFlags<T>; args: InferArgs<T> } : never

/**
 * The running command, which a handler receives in run and any provider can inject. Its type argument, the command or the schema of
 * the command, only casts the input, since nest injects the one instance whatever the type says.
 */
export class CommandContext<T extends typeof Command | StandardSchemaV1 = typeof Command> {
  /** the validated flags, the output of the schema when the command has one */
  public readonly flags: CommandContextInput<T> extends { flags: infer F } ? F : never
  /** the validated args, the output of the schema when the command has one */
  public readonly args: CommandContextInput<T> extends { args: infer A } ? A : never
  /** aborts on the first SIGINT or SIGTERM, the command closes once the handler returns */
  public readonly signal: AbortSignal
  public readonly oclif: Config
  public readonly id: string
  public readonly command: typeof Command

  constructor(context: Pick<CommandContext<T>, 'flags' | 'args' | 'signal' | 'oclif' | 'id' | 'command'>) {
    this.flags = context.flags
    this.args = context.args
    this.signal = context.signal
    this.oclif = context.oclif
    this.id = context.id
    this.command = context.command
  }
}
