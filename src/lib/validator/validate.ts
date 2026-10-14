import type { StandardSchemaV1 } from '@standard-schema/spec'

import { ValidationError } from './validator.error'

/** Validates the input with a Standard Schema and returns its output, throwing a ValidationError with the issues. */
export async function validate<T extends StandardSchemaV1>(schema: T, input: unknown): Promise<StandardSchemaV1.InferOutput<T>> {
  return unwrap(await schema['~standard'].validate(input))
}

function unwrap<T>(result: StandardSchemaV1.Result<T>): T {
  if (result.issues) {
    throw new ValidationError(result.issues)
  }

  // without strict null checks a falsy issues field does not narrow the result union
  return (result as StandardSchemaV1.SuccessResult<T>).value
}
