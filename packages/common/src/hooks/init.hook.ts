import type { Hook } from '@oclif/core'

import { setup } from '@lib'

export const initHook: Hook<'init'> = async () => {
  setup()
}
