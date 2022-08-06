import type { PromptOptions } from 'listr2'
import { createPrompt } from 'listr2'

import type { Logger } from '@utils/logger'

/** Gets prompt from user. */
export async function promptUser<T = any> (logger: Logger, options: PromptOptions): Promise<T> {
  try {
    return createPrompt(options, {
      stdout: process.stdout,
      cancelCallback: () => {
        logger.fatal('Cancelled prompt. Quitting.')
        process.exit(127)
      }
    })
  } catch (e) {
    logger.fatal('There was a problem getting the answer of the last question. Quitting.')
    logger.debug(e.trace)
    process.exit(126)
  }
}
