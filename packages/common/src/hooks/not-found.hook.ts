import type { Hook } from '@oclif/core'
import { Help } from '@oclif/core'

import { CliModule, LoggerService } from '@lib'

export const notFoundHook: Hook<'command_not_found'> = async(opts) => {
  const app = await CliModule.create(CliModule.forMinimum())
  const logger = await app.resolve(LoggerService)

  // show info
  logger.error('Command not found. Take a look at help. You can also use --[h]elp flag for subcommands.')
  logger.direct('')

  // show help
  const help = new Help(opts.config)

  await help.showHelp(['--all'])

  opts.context.exit(127)
}
