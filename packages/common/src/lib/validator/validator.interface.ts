import type { ClassTransformOptions } from 'class-transformer'
import type { ValidatorOptions } from 'class-validator'

export interface ValidatorServiceOptions {
  validator?: ValidatorOptions
  transformer?: ClassTransformOptions
}
