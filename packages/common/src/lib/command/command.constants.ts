import type { InjectionToken } from '@nestjs/common'

export const TOKEN_COMMAND: InjectionToken = Symbol('TOKEN_COMMAND')
export const TOKEN_COMMAND_FLAGS: InjectionToken = Symbol('TOKEN_COMMAND_FLAGS')
export const TOKEN_COMMAND_ARGS: InjectionToken = Symbol('TOKEN_COMMAND_ARGS')
export const TOKEN_OCLIF_CONFIG: InjectionToken = Symbol('TOKEN_OCLIF_CONFIG')
