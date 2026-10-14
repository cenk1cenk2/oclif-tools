import type { StandardSchemaV1 } from '@standard-schema/spec'

export class ValidationError extends Error {
  constructor(public readonly issues: readonly StandardSchemaV1.Issue[]) {
    super('Validation failed.')

    this.name = 'ValidationError'
  }
}
