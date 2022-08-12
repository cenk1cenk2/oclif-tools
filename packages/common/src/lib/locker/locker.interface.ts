import type { MergeStrategy } from '@utils'

export interface CommonLockerData {
  path: string
  enabled?: boolean
  root?: boolean
}

export type LockableData = any

export interface LockData<T extends LockableData = LockableData> extends CommonLockerData {
  data: T
  merge?: MergeStrategy
}

export interface UnlockData extends CommonLockerData {}
