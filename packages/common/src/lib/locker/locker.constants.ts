import type { InjectionToken } from '@nestjs/common'

export const INSTANCE_LOCKER_SERVICE: InjectionToken = Symbol('INSTANCE_LOCKER_SERVICE')
