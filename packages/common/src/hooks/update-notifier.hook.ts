import type { Hook } from '@oclif/core'
import notifier from 'update-notifier'

export const updateNotifierHook: Hook<'init'> = async (opts) => {
  notifier({ pkg: { name: opts.config.name, version: opts.config.version } }).notify({ isGlobal: true })
}
