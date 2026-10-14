import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import type { ValidationError } from 'class-validator'
import { validate, validateSync } from 'class-validator'

import { TOKEN_VALIDATOR_MODULE_OPTIONS } from './validator.constants'
import type { ValidatorModuleOptions } from './validator.interface'
import type { ClassType } from '@interfaces'
import { LoggerService } from '@lib/logger'

@Injectable()
export class ValidatorService implements OnModuleInit {
  private readonly options: ValidatorModuleOptions

  constructor(
    private readonly logger: LoggerService,
    @Inject(TOKEN_VALIDATOR_MODULE_OPTIONS) options: ValidatorModuleOptions
  ) {
    this.options = {
      validator: {
        skipMissingProperties: true,
        whitelist: false,
        always: true,
        enableDebugMessages: true,
        ...options.validator
      },
      transformer: { enableImplicitConversion: true, ...options.transformer }
    }
  }

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public async validate<T extends Record<PropertyKey, any>>(classType: ClassType<T>, object: T, options?: ValidatorModuleOptions): Promise<T> {
    const classObject = plainToClass(classType, object, { ...this.options.transformer, ...(options?.transformer ?? {}) })

    const errors = await validate(classObject, { ...this.options.validator, ...(options?.validator ?? {}) })

    if (errors.length) {
      errors.forEach((error) => {
        this.logValidationError(error)
      })

      throw new Error('Validation failed.')
    }

    return classObject
  }

  public validateSync<T extends Record<PropertyKey, any>>(classType: ClassType<T>, object: T, options?: ValidatorModuleOptions): T {
    const classObject = plainToClass(classType, object, { ...this.options.transformer, ...(options?.transformer ?? {}) })

    const errors = validateSync(classObject, { ...this.options.validator, ...(options?.validator ?? {}) })

    if (errors.length) {
      errors.forEach((error) => {
        this.logValidationError(error)
      })

      throw new Error('Validation failed.')
    }

    return classObject
  }

  private logValidationError(err: ValidationError): void {
    this.logger.error('Field "%s" failed validation with value "%s": %o', err.property, err.value, err.constraints)

    if (err.children) {
      err.children.forEach((children) => this.logValidationError(children))
    }
  }
}
