/* eslint-disable no-console */
import type { Hook } from '@oclif/core'

export function generateInitHook (options: {
  defaultTask?: (opts: any) => Promise<void>
  preliminaryTask?: (opts: any) => Promise<void>
  logo?: (version?: string) => string
}): Hook<'init'> {
  const initHook: Hook<'init'> = async (opts): Promise<void> => {
    // print logo
    if (options.logo) {
      // eslint-disable-next-line no-console
      console.log(options.logo(opts.config.version))
    } else {
      const logo = `${opts.config.name} ${opts.config.version}`

      console.log(logo)
      console.log('-'.repeat(logo.length))
    }

    if (options.preliminaryTask) {
      await options.preliminaryTask(opts)
    }

    // run default command
    if (options?.defaultTask && !opts.id) {
      try {
        await options.defaultTask(opts)
      } finally {
        process.exit(0)
      }
    }
  }

  return initHook
}
