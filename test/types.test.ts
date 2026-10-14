import { describe, expectTypeOf, it } from 'vitest'

import type { CommandInput, LogLevels } from '../src'
import { Args, Command, Flags } from '../src'

describe('CommandInput', () => {
  class Typed extends Command {
    static flags = {
      name: Flags.string({ default: 'world' }),
      required: Flags.string({ required: true }),
      many: Flags.string({ multiple: true }),
      choice: Flags.option({ options: ['a', 'b'] as const })(),
      optional: Flags.integer()
    }

    static args = {
      person: Args.string({ required: true }),
      maybe: Args.string()
    }
  }

  type Input = CommandInput<typeof Typed>

  it('types the flags of the command and the base flags', () => {
    expectTypeOf(Typed).toExtend<typeof Command>()
    expectTypeOf<Input['flags']['name']>().toEqualTypeOf<string>()
    expectTypeOf<Input['flags']['required']>().toEqualTypeOf<string>()
    expectTypeOf<Input['flags']['many']>().toEqualTypeOf<string[] | undefined>()
    expectTypeOf<Input['flags']['choice']>().toEqualTypeOf<'a' | 'b' | undefined>()
    expectTypeOf<Input['flags']['optional']>().toEqualTypeOf<number | undefined>()
    expectTypeOf<Input['flags']['log-level']>().toEqualTypeOf<LogLevels>()
    expectTypeOf<Input['flags']['ci']>().toEqualTypeOf<boolean>()
    expectTypeOf<Input['flags']['json']>().toEqualTypeOf<boolean>()
    expectTypeOf<Input['flags']>().not.toHaveProperty('typo')
  })

  it('types the args of the command', () => {
    expectTypeOf<Input['args']['person']>().toEqualTypeOf<string>()
    expectTypeOf<Input['args']['maybe']>().toEqualTypeOf<string | undefined>()
    expectTypeOf<Input['args']>().not.toHaveProperty('typo')
  })
})
