import type { ListrBaseClassOptions } from 'listr2'

export type TaskModuleOptions = ListrBaseClassOptions<any>

export interface TaskModuleExtras {
  isGlobal: boolean
}
