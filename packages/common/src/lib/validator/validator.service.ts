import { plainToClass } from 'class-transformer'
import type { ValidationError } from 'class-validator'
import { validate, validateSync } from 'class-validator'

import type { ValidatorServiceOptions } from './validator.interface'
import type { ClassType } from '@interfaces/class.interface'
import { Logger } from '@utils/logger'

export class ValidatorService {
  private readonly logger = new Logger(this.constructor.name)

  constructor (public options?: ValidatorServiceOptions) {
    this.options = {
      validator: {
        skipMissingProperties: true,
        whitelist: false,
        always: true,
        enableDebugMessages: true
      },
      transformer: { enableImplicitConversion: true },
      ...options ?? {}
    }
  }

  public async validate<T extends Record<PropertyKey, any>>(classType: ClassType<T>, object: T): Promise<T> {
    const classObject = plainToClass(classType, object, this.options.transformer)

    const errors = await validate(classObject, this.options.validator)

    if (errors.length) {
      errors.forEach((error) => {
        this.logValidationError(error)
      })

      throw new Error('Validation failed.')
    }

    return classObject
  }

  public validateSync<T extends Record<PropertyKey, any>>(classType: ClassType<T>, object: T): T {
    const classObject = plainToClass(classType, object, this.options.transformer)

    const errors = validateSync(classObject, this.options.validator)

    if (errors.length) {
      errors.forEach((error) => {
        this.logValidationError(error)
      })

      throw new Error('Validation failed.')
    }

    return classObject
  }

  private logValidationError (err: ValidationError): void {
    this.logger.error('Field "%s" failed validation with value "%s": %s', err.property, err.value, Object.values(err.constraints).join(', '))
  }
}
