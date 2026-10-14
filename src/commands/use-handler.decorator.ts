import type { StandardSchemaV1 } from '@standard-schema/spec'

import type { Command } from './base.command'
import { TOKEN_USE_HANDLER } from './base.command.constants'
import type { CommandInput, CommandSchemaInput, UseHandlerOptions } from './base.command.interface'

type Same<A, B, Mismatch> = [A] extends [B] ? ([B] extends [A] ? unknown : Mismatch) : Mismatch

/**
 * Requires the handler to take exactly the input of the command, or the output of its schema together with a schema that takes the parsed
 * flags and args, naming the mismatch in the type error.
 */
type HandlerFor<C extends typeof Command, H extends { run: (input: any) => Promise<void> }, S extends StandardSchemaV1 | undefined> =
  // keyed on the property of a schema, since without strict null checks undefined passes for a schema too
  '~standard' extends keyof S
    ? Same<CommandSchemaInput<S & StandardSchemaV1>, Parameters<H['run']>[0], HandlerMismatch> &
        ([Omit<CommandInput<C>, 'signal'>] extends [StandardSchemaV1.InferInput<S & StandardSchemaV1>] ? unknown : SchemaMismatch)
    : Same<CommandInput<C>, Parameters<H['run']>[0], HandlerMismatch>

interface HandlerMismatch {
  useHandler: 'the handler takes the flags and args of another command, or not the output of the schema'
}

interface SchemaMismatch {
  useHandlerSchema: 'the schema does not take the flags and args of the command'
}

/** Registers the module a command boots, the handler that runs it and optionally the schema its input passes before. */
export function UseHandler<H extends { run: (input: any) => Promise<void> }, S extends StandardSchemaV1 | undefined = undefined>(options: UseHandlerOptions<H, S>) {
  return <C extends typeof Command>(target: C & HandlerFor<C, H, S>): void => {
    Reflect.defineMetadata(TOKEN_USE_HANDLER, options, target)
  }
}
