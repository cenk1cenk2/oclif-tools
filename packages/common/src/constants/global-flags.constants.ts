import type { FlagInput } from '@oclif/core/lib/interfaces/parser'

import { HelpGroups } from './help-groups.constants'
import { Flags } from '@interfaces'
import { LogLevels } from '@utils/logger'

export const CLI_FLAGS: FlagInput = {
  ['log-level']: Flags.string({
    default: LogLevels.INFO,
    env: 'LOG_LEVEL',
    description: 'Set the log level of the application.',
    options: Object.values(LogLevels).map((level) => level.toLowerCase()),
    helpGroup: HelpGroups.CLI,
    parse: async (input) => (input as string)?.toUpperCase() as unknown as LogLevels
  }),
  ci: Flags.boolean({
    default: false,
    hidden: true,
    env: 'CI',
    description: 'Instruct whether this is running the CI/CD configuration.',
    helpGroup: HelpGroups.CLI
  }),
  json: Flags.boolean({
    default: false,
    hidden: true,
    env: 'JSON',
    description: 'Put the CLI to respond in JSON.',
    helpGroup: HelpGroups.CLI
  })
}
