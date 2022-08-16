import type { LockerService } from '@lib'

export type ConfigCommandChoices<T extends string> = Record<T, () => void | Promise<void>>

export interface ConfigCommandSetup<T extends string = string, LockFile = any> {
  choices: ConfigCommandChoices<T>
  locker: LockerService<LockFile>
}
