import { Injectable, Module } from '@nestjs/common'
import type { StandardSchemaV1 } from '@standard-schema/spec'
import { describe, expect, it } from 'vitest'
import { z } from 'zod'

import type { CommandSchemaInput } from '../src'
import { Command, Flags, UseHandler } from '../src'

describe('UseHandler', () => {
  @Module({})
  class EmptyModule {}

  const tone = Flags.string({ char: 't' })

  it('describes copies of the flags from a schema that converts to JSON Schema', () => {
    const schema = z.object({ flags: z.object({ tone: z.enum(['polite', 'casual']).describe('How to say it') }), args: z.looseObject({}) })

    @Injectable()
    class Handler {
      public async run(input: CommandSchemaInput<typeof schema>): Promise<void> {
        expect(input).toBeDefined()
      }
    }

    @UseHandler({
      module: EmptyModule,
      handler: Handler,
      schema
    })
    class Described extends Command {
      static flags = { tone }
    }

    expect(Described.flags.tone).toMatchObject({
      char: 't',
      required: true,
      options: ['polite', 'casual'],
      description: 'How to say it'
    })
    expect(Described.flags.tone).not.toBe(tone)
    expect(tone).not.toHaveProperty('options')
    expect(tone.required).toBeFalsy()
  })

  it('leaves the flags alone for a schema that only validates', () => {
    const schema: StandardSchemaV1<unknown, { flags: { tone?: string }; args: Record<string, unknown> }> = {
      // the property name is fixed by the standard schema spec
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: (value: any) => ({ value })
      }
    }
    const flags = { tone }

    @Injectable()
    class Handler {
      public async run(input: CommandSchemaInput<typeof schema>): Promise<void> {
        expect(input).toBeDefined()
      }
    }

    @UseHandler({
      module: EmptyModule,
      handler: Handler,
      schema
    })
    class Validated extends Command {
      static flags = flags
    }

    expect(Validated.flags).toBe(flags)
    expect(Validated.flags.tone).toBe(tone)
  })
})
