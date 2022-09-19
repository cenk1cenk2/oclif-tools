import type { MergeStrategy } from '@utils'

export interface CommonLockerData {
  path?: string | string[]
  enabled?: boolean
  root?: boolean
}

export type LockableData = any

export interface LockData<T extends LockableData = LockableData> extends Partial<CommonLockerData> {
  data: T
  merge?: MergeStrategy
}

export interface UnlockData extends CommonLockerData {
  path: string | string[]
}
