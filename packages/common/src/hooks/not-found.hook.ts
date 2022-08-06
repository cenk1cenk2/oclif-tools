import { Help } from '@oclif/core'
import type { Hook } from '@oclif/core'

import { Logger } from '@utils/logger'

export const notFoundHook: () => Hook<'command_not_found'> = () => async (opts) => {
  const logger = new Logger(opts.config.name)

  // show info
  logger.fatal('Command not found. Take a look at help. You can also use --[h]elp flag for subcommands.', { custom: opts.config.name })
  // eslint-disable-next-line no-console
  console.log()

  // show help
  const help = new Help(opts.config)

  await help.showHelp([ '--all' ])

  process.exit(120)
}
