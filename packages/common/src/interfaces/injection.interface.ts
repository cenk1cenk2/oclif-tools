import type { InjectionToken } from '@nestjs/common'

export interface InjectedProperty {
  key: string
  type: InjectionToken
}
