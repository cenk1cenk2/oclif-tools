import { Injectable, OnModuleInit } from '@nestjs/common'
import type { StandardSchemaV1 } from '@standard-schema/spec'

import { ValidationError } from './validator.error'
import { LoggerService } from '@lib/logger'

@Injectable()
export class ValidatorService implements OnModuleInit {
  constructor(private readonly logger: LoggerService) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public async validate<T extends StandardSchemaV1>(schema: T, input: unknown): Promise<StandardSchemaV1.InferOutput<T>> {
    return this.unwrap(await schema['~standard'].validate(input))
  }

  public validateSync<T extends StandardSchemaV1>(schema: T, input: unknown): StandardSchemaV1.InferOutput<T> {
    const result = schema['~standard'].validate(input)

    if (result instanceof Promise) {
      throw new TypeError(`Schema from "${schema['~standard'].vendor}" validates asynchronously, use validate instead.`)
    }

    return this.unwrap(result)
  }

  private unwrap<T>(result: StandardSchemaV1.Result<T>): T {
    if (result.issues) {
      result.issues.forEach((issue) => {
        this.logger.error(
          'Field "%s" failed validation: %s',
          issue.path?.map((segment) => (typeof segment === 'object' ? segment.key : segment).toString()).join('.') ?? '',
          issue.message
        )
      })

      throw new ValidationError(result.issues)
    }

    // without strict null checks a falsy issues field does not narrow the result union
    return (result as StandardSchemaV1.SuccessResult<T>).value
  }
}
