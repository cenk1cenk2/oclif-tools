// oclif loads the hook on its own, before anything else of the package
import 'reflect-metadata'

import type { Config, Hook } from '@oclif/core'
import { Help } from '@oclif/core'

import { CliFactory, CommandContext, LogLevels, LoggerService } from '@lib'

const hook: Hook<'command_not_found'> = async(opts) => {
  const app = await CliFactory.createFallback({
    config: { logLevel: LogLevels.INFO, isJson: false },
    context: new CommandContext({
      flags: {},
      args: {},
      signal: new AbortController().signal,
      oclif: opts.config as Config,
      id: opts.id,
      command: undefined
    })
  })
  const logger = await app.resolve(LoggerService)

  logger.error('Command not found. Take a look at help. You can also use --[h]elp flag for subcommands.')
  logger.direct('')

  await app.close()

  const help = new Help(opts.config)

  await help.showHelp(['--all'])

  opts.context.exit(127)
}

export default hook
