import { Injectable, Module } from '@nestjs/common'
import { describe, expectTypeOf, it } from 'vitest'

import type { CommandHandler, CommandInput, LogLevels } from '../src'
import { Args, Command, Flags, UseHandler } from '../src'

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

describe('UseHandler', () => {
  @Module({})
  class EmptyModule {}

  class Greet extends Command {
    static flags = {
      from: Flags.string({ default: 'test' })
    }
  }

  class Leave extends Command {
    static flags = {
      silently: Flags.boolean({ default: false })
    }
  }

  @Injectable()
  class GreetHandler implements CommandHandler<typeof Greet> {
    public async run({ flags }: CommandInput<typeof Greet>): Promise<void> {
      expectTypeOf(flags.from).toEqualTypeOf<string>()
    }
  }

  it('accepts the handler of the command and rejects a handler of another command', () => {
    @UseHandler({ module: EmptyModule, handler: GreetHandler })
    class Accepted extends Greet {}

    // @ts-expect-error the handler of Greet does not take the input of Leave
    @UseHandler({ module: EmptyModule, handler: GreetHandler })
    class Rejected extends Leave {}

    expectTypeOf(Accepted).toExtend<typeof Command>()
    expectTypeOf(Rejected).toExtend<typeof Command>()
  })
})
