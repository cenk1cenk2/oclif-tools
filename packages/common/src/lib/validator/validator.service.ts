import { Injectable } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { plainToClass } from 'class-transformer'
import type { ValidationError } from 'class-validator'
import { validate, validateSync } from 'class-validator'

import { TOKEN_VALIDATOR_SERVICE_OPTIONS } from './validator.constants'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { ValidatorServiceOptions } from './validator.interface'
import type { ClassType } from '@interfaces'
import { LoggerService } from '@lib/logger'

@Injectable()
export class ValidatorService {
  private options: ValidatorServiceOptions

  constructor (
    private readonly logger: LoggerService,
    moduleRef: ModuleRef
  ) {
    this.logger.setup(this.constructor.name)

    try {
      this.options = moduleRef.get(TOKEN_VALIDATOR_SERVICE_OPTIONS, { strict: false })
    } catch {
      this.options = {
        validator: {
          skipMissingProperties: true,
          whitelist: false,
          always: true,
          enableDebugMessages: true
        },
        transformer: { enableImplicitConversion: true }
      }
    }
  }

  public async validate<T extends Record<PropertyKey, any>>(classType: ClassType<T>, object: T, options?: ValidatorServiceOptions): Promise<T> {
    const classObject = plainToClass(classType, object, { ...this.options.transformer, ...options?.transformer ?? {} })

    const errors = await validate(classObject, { ...this.options.validator, ...options?.validator ?? {} })

    if (errors.length) {
      errors.forEach((error) => {
        this.logValidationError(error)
      })

      throw new Error('Validation failed.')
    }

    return classObject
  }

  public validateSync<T extends Record<PropertyKey, any>>(classType: ClassType<T>, object: T, options?: ValidatorServiceOptions): T {
    const classObject = plainToClass(classType, object, { ...this.options.transformer, ...options?.transformer ?? {} })

    const errors = validateSync(classObject, { ...this.options.validator, ...options?.validator ?? {} })

    if (errors.length) {
      errors.forEach((error) => {
        this.logValidationError(error)
      })

      throw new Error('Validation failed.')
    }

    return classObject
  }

  private logValidationError (err: ValidationError): void {
    this.logger.error('Field "%s" failed validation with value "%s": %o', err.property, err.value, err.constraints)

    if (err.children) {
      err.children.forEach((children) => this.logValidationError(children))
    }
  }
}
