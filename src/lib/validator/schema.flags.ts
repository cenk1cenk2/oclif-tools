import type { Interfaces } from '@oclif/core'
import { Args, Errors, Flags } from '@oclif/core'
import type { StandardSchemaV1 } from '@standard-schema/spec'

import { validate } from './validate'
import { ValidationError } from './validator.error'

function parse<S extends StandardSchemaV1>(schema: S, input: string): Promise<StandardSchemaV1.InferOutput<S>> {
  return validate(schema, input).catch((e: unknown) => {
    if (e instanceof ValidationError) {
      // a CLIError is a parse failure for oclif, which reports it with the flag or arg and exits with 2
      throw new Errors.CLIError(e.issues.map((issue) => [e.path(issue), issue.message].filter(Boolean).join(': ')).join('\n'))
    }

    throw e
  })
}

/** A flag whose value is the output of a Standard Schema, call it with the options of the flag like any oclif flag. */
export function schemaFlag<S extends StandardSchemaV1>(schema: S): Interfaces.FlagDefinition<StandardSchemaV1.InferOutput<S>> {
  // the output of an unresolved schema can not be shown to be no array, which the flag of a single value requires
  return Flags.custom<StandardSchemaV1.InferOutput<S>>({ parse: ((input: string) => parse(schema, input)) as (input: string) => Promise<any> })
}

/** An arg whose value is the output of a Standard Schema, call it with the options of the arg like any oclif arg. */
export function schemaArg<S extends StandardSchemaV1>(schema: S): Interfaces.ArgDefinition<StandardSchemaV1.InferOutput<S>> {
  return Args.custom<StandardSchemaV1.InferOutput<S>>({ parse: (input) => parse(schema, input) })
}
