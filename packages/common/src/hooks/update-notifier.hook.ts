import type { Hook } from '@oclif/core'

export const updateNotifierHook: Hook<'init'> = async (opts) => {
  const { default: notifier } = await import('update-notifier')

  notifier({ pkg: { name: opts.config.name, version: opts.config.version } }).notify({ isGlobal: true })
}
