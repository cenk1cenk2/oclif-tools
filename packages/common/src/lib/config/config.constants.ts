import type { InjectionToken } from '@nestjs/common'

export enum ConfigEnvKeys {
  NAME = '__name',
  PARSER = '__format',
  ELEMENT = '__element',
  ELEMENT_REPLACER = '${i}'
}

export const TOKEN_CONFIG_MODULE_OPTIONS: InjectionToken = Symbol('TOKEN_CONFIG_MODULE_OPTIONS')
