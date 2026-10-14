import { Injectable, OnModuleInit } from '@nestjs/common'
import type { StandardSchemaV1 } from '@standard-schema/spec'

import { validate } from './validate'
import { ValidationError } from './validator.error'
import { LoggerService } from '@lib/logger'

/** Validates like validate, logging every issue by its path before it throws. */
@Injectable()
export class ValidatorService implements OnModuleInit {
  constructor(private readonly logger: LoggerService) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public async validate<T extends StandardSchemaV1>(schema: T, input: unknown): Promise<StandardSchemaV1.InferOutput<T>> {
    return validate(schema, input).catch((e: unknown) => {
      throw this.report(e)
    })
  }

  private report(error: unknown): unknown {
    if (error instanceof ValidationError) {
      error.issues.forEach((issue) => {
        this.logger.error('Field "%s" failed validation: %s', error.path(issue), issue.message)
      })
    }

    return error
  }
}
