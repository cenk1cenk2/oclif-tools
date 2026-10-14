import type { StandardSchemaV1 } from '@standard-schema/spec'
import { describe, expect, it, vi } from 'vitest'

import type { LoggerService } from '../src'
import { ValidationError, ValidatorService } from '../src'

describe('ValidatorService', () => {
  function schema<Output>(validate: StandardSchemaV1<unknown, Output>['~standard']['validate']): StandardSchemaV1<unknown, Output> {
    return {
      // the property name is fixed by the standard schema spec
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '~standard': {
        version: 1,
        vendor: 'test',
        validate
      }
    }
  }

  const name = schema<{ name: string }>((value: any) =>
    typeof value?.name === 'string' ? { value: { name: value.name.toUpperCase() } } : { issues: [{ message: 'Expected a string.', path: ['name'] }] }
  )
  const later = schema<number>(async(value) => ({ value: Number(value) }))

  function validator(): { service: ValidatorService; error: ReturnType<typeof vi.fn> } {
    const error = vi.fn()

    return { service: new ValidatorService({ error } as unknown as LoggerService), error }
  }

  it('returns the output of the schema', async() => {
    const { service } = validator()

    await expect(service.validate(name, { name: 'async' })).resolves.toEqual({ name: 'ASYNC' })
    await expect(service.validate(later, '5')).resolves.toBe(5)
  })

  it('throws the issues and logs them by path', async() => {
    const { service, error } = validator()

    await expect(service.validate(name, {})).rejects.toSatisfy((e: ValidationError) => e instanceof ValidationError && e.issues[0].message === 'Expected a string.')
    expect(error).toHaveBeenCalledWith('Field "%s" failed validation: %s', 'name', 'Expected a string.')
  })
})
