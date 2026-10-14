import { Injectable } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { describe, expect, it, vi } from 'vitest'

import type { CommandHandler } from '../src'
import { CommandContext, LogLevels, LoggerService } from '../src'

describe('CommandHandler', () => {
  @Injectable()
  class GreetHandler implements CommandHandler {
    constructor(
      private readonly logger: LoggerService,
      private readonly command: CommandContext
    ) {}

    public async run({ args }: CommandContext): Promise<void> {
      this.logger.info('%s %s from %s', this.command.flags.greeting, args.person, this.command.id)
    }
  }

  it('runs without oclif in a nest testing module', async() => {
    const info = vi.fn()
    const context = new CommandContext({
      flags: {
        greeting: 'hello',
        ['log-level']: LogLevels.INFO,
        ci: false,
        json: false
      },
      args: { person: 'world' },
      signal: new AbortController().signal,
      oclif: undefined,
      id: 'greet',
      command: undefined
    })
    const module = await Test.createTestingModule({
      providers: [GreetHandler, { provide: LoggerService, useValue: { info } }, { provide: CommandContext, useValue: context }]
    }).compile()

    await module.get(GreetHandler).run(context)

    expect(info).toHaveBeenCalledWith('%s %s from %s', 'hello', 'world', 'greet')
  })
})
