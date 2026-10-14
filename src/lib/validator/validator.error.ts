import type { StandardSchemaV1 } from '@standard-schema/spec'

export class ValidationError extends Error {
  constructor(public readonly issues: readonly StandardSchemaV1.Issue[]) {
    super('Validation failed.')

    this.name = 'ValidationError'
  }

  /** The dotted path of an issue, empty for an issue of the value itself. */
  public path(issue: StandardSchemaV1.Issue): string {
    return issue.path?.map((segment) => (typeof segment === 'object' ? segment.key : segment).toString()).join('.') ?? ''
  }

  /** Every issue on its own line, prefixed by its path when it has one. */
  public describe(): string {
    return this.issues.map((issue) => [this.path(issue), issue.message].filter(Boolean).join(': ')).join('\n')
  }
}
