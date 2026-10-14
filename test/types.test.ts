import { Injectable, Module } from '@nestjs/common'
import { describe, expectTypeOf, it } from 'vitest'
import { z } from 'zod'

import type { CommandContext, CommandHandler, LogLevels } from '../src'
import { Args, Command, Flags, UseHandler } from '../src'

describe('CommandContext', () => {
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

  type Input = CommandContext<typeof Typed>

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
    public async run({ flags }: CommandContext<typeof Greet>): Promise<void> {
      expectTypeOf(flags.from).toEqualTypeOf<string>()
    }
  }

  describe('with a schema', () => {
    const schema = z.object({
      flags: z.object({ from: z.string().transform((from) => from.length) }),
      // a command without args parses them into an open record, which an empty strict object does not take
      args: z.looseObject({})
    })

    @Injectable()
    class SchemaHandler {
      public async run({ flags, signal }: CommandContext<typeof schema>): Promise<void> {
        expectTypeOf(flags.from).toEqualTypeOf<number>()
        expectTypeOf(signal).toEqualTypeOf<AbortSignal>()
      }
    }

    it('requires the handler to take the output of the schema, and the schema the flags and args of the command', () => {
      @UseHandler({
        module: EmptyModule,
        handler: SchemaHandler,
        schema
      })
      class Accepted extends Greet {}

      // @ts-expect-error the handler takes the context of the command instead of the one of the schema
      @UseHandler({
        module: EmptyModule,
        handler: GreetHandler,
        schema
      })
      class CommandContextHandler extends Greet {}

      // @ts-expect-error the schema takes a flag the command does not declare
      @UseHandler({
        module: EmptyModule,
        handler: SchemaHandler,
        schema
      })
      class Undeclared extends Leave {}

      expectTypeOf(Accepted).toExtend<typeof Command>()
      expectTypeOf(CommandContextHandler).toExtend<typeof Command>()
      expectTypeOf(Undeclared).toExtend<typeof Command>()
    })
  })

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
