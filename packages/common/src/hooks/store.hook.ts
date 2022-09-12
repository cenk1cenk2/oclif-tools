import type { Hook } from '@oclif/core'

import { StoreService } from '@lib'

export const storeHook: <T extends Record<PropertyKey, any> = Record<PropertyKey, any>>(cb: (opts, store: StoreService<T>) => void) => Hook<'init'> = (cb) => async (opts) => {
  cb(opts, new StoreService())
}
