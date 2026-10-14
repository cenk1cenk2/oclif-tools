import { Injectable, Module } from '@nestjs/common'
import { join } from 'path'
import { describe, expect, expectTypeOf, it, vi } from 'vitest'
import { z } from 'zod'

import type { CommandHandler, CommandInput } from '../src'
import { Command, UseHandler, schemaArg, schemaFlag } from '../src'

describe('schemaFlag and schemaArg', () => {
  let input: CommandInput<typeof Deploy>

  @Injectable()
  class DeployHandler implements CommandHandler<typeof Deploy> {
    public async run(received: CommandInput<typeof Deploy>): Promise<void> {
      input = received
    }
  }

  @Module({ providers: [DeployHandler] })
  class DeployModule {}

  @UseHandler({ module: DeployModule, handler: DeployHandler })
  class Deploy extends Command {
    static flags = {
      port: schemaFlag(z.coerce.number().int().min(1))({ default: 8080 }),
      tags: schemaFlag(z.string().toUpperCase())({ multiple: true })
    }

    static args = {
      target: schemaArg(z.enum(['staging', 'production']))({ required: true })
    }
  }

  async function run(argv: string[]): Promise<Error | undefined> {
    vi.spyOn(process.stdout, 'write').mockImplementation(() => true)
    vi.spyOn(process.stderr, 'write').mockImplementation(() => true)

    try {
      await Deploy.run(argv, { root: join(import.meta.dirname, '..') })
    } catch(e: any) {
      return e
    } finally {
      vi.restoreAllMocks()
      process.exitCode = undefined
    }
  }

  it('hands the outputs of the schemas to the handler', async() => {
    expect(await run(['production', '--port', '3000', '--tags', 'a', '--tags', 'b'])).toBeUndefined()
    expect(input.flags).toMatchObject({ port: 3000, tags: ['A', 'B'] })
    expect(input.args).toEqual({ target: 'production' })
  })

  it('fails a value the schema rejects as a parse error', async() => {
    const flag = await run(['staging', '--port', '0'])
    const arg = await run(['nowhere'])

    expect(flag.message).toContain('Parsing --port')
    expect(flag.message).toContain('Too small')
    expect(flag).toMatchObject({ oclif: { exit: 2 } })
    expect(arg.message).toContain('Invalid option')
    expect(arg).toMatchObject({ oclif: { exit: 2 } })
  })

  it('types the input with the outputs of the schemas', () => {
    expectTypeOf<CommandInput<typeof Deploy>['flags']['port']>().toEqualTypeOf<number>()
    expectTypeOf<CommandInput<typeof Deploy>['flags']['tags']>().toEqualTypeOf<string[] | undefined>()
    expectTypeOf<CommandInput<typeof Deploy>['args']['target']>().toEqualTypeOf<'staging' | 'production'>()
  })
})
