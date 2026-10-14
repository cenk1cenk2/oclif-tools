import { Inject, Injectable } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { describe, expect, it, vi } from 'vitest'

import type { CommandHandler, CommandInput } from '../src'
import { LoggerService, TOKEN_COMMAND_FLAGS } from '../src'

describe('CommandHandler', () => {
  @Injectable()
  class GreetHandler implements CommandHandler {
    constructor(
      private readonly logger: LoggerService,
      @Inject(TOKEN_COMMAND_FLAGS) private readonly flags: { greeting: string }
    ) {}

    public async run({ args }: CommandInput): Promise<void> {
      this.logger.info('%s %s', this.flags.greeting, args.person)
    }
  }

  it('runs without oclif in a nest testing module', async() => {
    const info = vi.fn()
    const module = await Test.createTestingModule({
      providers: [GreetHandler, { provide: LoggerService, useValue: { info } }, { provide: TOKEN_COMMAND_FLAGS, useValue: { greeting: 'hello' } }]
    }).compile()

    await module.get(GreetHandler).run({ flags: { json: false }, args: { person: 'world' } })

    expect(info).toHaveBeenCalledWith('%s %s', 'hello', 'world')
  })
})
