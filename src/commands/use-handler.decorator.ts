import type { StandardJSONSchemaV1, StandardSchemaV1 } from '@standard-schema/spec'

import type { Command } from './base.command'
import { TOKEN_USE_HANDLER } from './base.command.constants'
import type { CommandInput, CommandSchemaInput, UseHandlerOptions, UseHandlerRegistration } from './base.command.interface'

type Same<A, B, Mismatch> = [A] extends [B] ? ([B] extends [A] ? unknown : Mismatch) : Mismatch

/**
 * Requires the handler to take exactly the input of the command, or the output of its schema together with a schema that reads only the
 * flags and args the command declares, naming the mismatch in the type error.
 */
type HandlerFor<C extends typeof Command, H extends { run: (input: any) => Promise<void> }, S extends StandardSchemaV1 | undefined> =
  // keyed on the property of a schema, since without strict null checks undefined passes for a schema too
  '~standard' extends keyof S
    ? Same<CommandSchemaInput<S & StandardSchemaV1>, Parameters<H['run']>[0], HandlerMismatch> & Declared<StandardSchemaV1.InferInput<S & StandardSchemaV1>, CommandInput<C>>
    : Same<CommandInput<C>, Parameters<H['run']>[0], HandlerMismatch>

/** The schema may narrow the values, but every flag and arg it reads has to be declared by the command, unless it does not type its input. */
type Declared<I, P extends CommandInput<any>> = unknown extends I
  ? unknown
  : [Exclude<keyof I['flags' & keyof I], keyof P['flags']> | Exclude<keyof I['args' & keyof I], keyof P['args']>] extends [never]
    ? unknown
    : SchemaMismatch

interface HandlerMismatch {
  useHandler: 'the handler takes the flags and args of another command, or not the output of the schema'
}

interface SchemaMismatch {
  useHandlerSchema: 'the schema reads a flag or arg the command does not declare'
}

/**
 * Registers the module a command boots, the handler that runs it and optionally the schema its input passes before.
 * A schema that describes itself as JSON Schema also describes the flags and args for the help, the manifest and completion.
 */
export function UseHandler<H extends { run: (input: any) => Promise<void> }, S extends StandardSchemaV1 | undefined = undefined>(options: UseHandlerOptions<H, S>) {
  return <C extends typeof Command>(target: C & HandlerFor<C, H, S>): void => {
    // the command parses with the flags and args as declared, so the rules taken from the schema show in the help while only the schema rejects values
    Reflect.defineMetadata(
      TOKEN_USE_HANDLER,
      {
        ...options,
        flags: target.flags,
        args: target.args
      } satisfies UseHandlerRegistration,
      target
    )

    const json: { properties?: Record<string, any> } | undefined = (options.schema?.['~standard'] as Partial<StandardJSONSchemaV1.Props>)?.jsonSchema?.input({
      target: 'draft-2020-12'
    })

    if (json) {
      target.flags = describe(target.flags, json.properties?.flags)
      target.args = describe(target.args, json.properties?.args)
    }
  }
}

/** Copies the definitions with the required, options, default and description a JSON Schema object gives their properties, unless they declare their own. */
function describe<T extends Record<string, Record<string, any>>>(definitions: T, json: Record<string, any> | undefined): T {
  if (!definitions || !json?.properties) {
    return definitions
  }

  return Object.fromEntries(
    Object.entries(definitions).map(([key, definition]) => {
      const property = json.properties[key]

      if (!property) {
        return [key, definition]
      }

      const derived = {
        required: json.required?.includes(key) || undefined,
        options: Array.isArray(property.enum) && property.enum.every((value: unknown) => typeof value === 'string') ? property.enum : undefined,
        default: property.default,
        description: property.description
      }

      return [
        key,
        {
          ...definition,
          ...Object.fromEntries(
            Object.entries(derived).filter(([option, value]) => value !== undefined && (option === 'required' ? !definition.required : definition[option] === undefined))
          )
        }
      ]
    })
  ) as T
}
