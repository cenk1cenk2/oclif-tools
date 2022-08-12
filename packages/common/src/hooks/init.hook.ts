import type { Hook } from '@oclif/core'

import { setup } from '@lib'

export const initHook: Hook<'init'> = async (opts) => {
  setup()

  if ((opts.config.pjson.oclif as any)?.defaultCommand && !opts.id) {
    try {
      await opts.config.runCommand((opts.config.pjson.oclif as any).defaultCommand)
    } finally {
      process.exit(0)
    }
  }
}
