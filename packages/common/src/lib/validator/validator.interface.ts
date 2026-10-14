import type { ClassTransformOptions } from 'class-transformer'
import type { ValidatorOptions } from 'class-validator'

export interface ValidatorModuleOptions {
  validator?: ValidatorOptions
  transformer?: ClassTransformOptions
}
