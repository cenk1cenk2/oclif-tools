import { plainToClass } from 'class-transformer'
import type { ValidationError } from 'class-validator'
import { validate, validateSync } from 'class-validator'

import type { ValidatorServiceOptions } from './validator.interface'
import type { ClassType } from '@interfaces/class.interface'
import type { Logger } from '@utils/logger'

export class ValidatorService {
  constructor (private logger: Logger, private readonly options?: ValidatorServiceOptions) {
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

    try {
      await validate(classObject, this.options.validator)

      return classObject
    } catch (errors) {
      if (errors.length) {
        errors.forEach((error: ValidationError) => {
          this.logger.error(error.toString())
        })

        throw new Error('Validation failed.')
      }
    }
  }

  public validateSync<T extends Record<PropertyKey, any>>(classType: ClassType<T>, object: T): T {
    const classObject = plainToClass(classType, object, this.options.transformer)

    const errors = validateSync(classObject, this.options.validator)

    if (errors.length) {
      errors.forEach((error) => {
        this.logger.error(error.toString())
      })

      throw new Error('Validation failed.')
    }

    return classObject
  }
}
