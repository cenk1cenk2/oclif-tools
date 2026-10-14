import type { InjectionToken } from '@nestjs/common'

export enum ConfigEnvKeys {
  NAME = '__name',
  PARSER = '__format',
  ELEMENT = '__element',
  ELEMENT_REPLACER = '${i}'
}

export const TOKEN_CONFIG_MODULE_OPTIONS: InjectionToken = Symbol('TOKEN_CONFIG_MODULE_OPTIONS')
export const TOKEN_COMMAND_FLAGS: InjectionToken = Symbol('TOKEN_COMMAND_FLAGS')
export const TOKEN_COMMAND_ARGS: InjectionToken = Symbol('TOKEN_COMMAND_ARGS')
