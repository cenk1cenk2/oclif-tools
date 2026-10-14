import type { Config } from '@oclif/core'
import { cosmiconfig } from 'cosmiconfig'
import { cloneDeep, mergeWith } from 'es-toolkit'
import { resolve } from 'path'
import { parse } from 'yaml'

import type { RcModuleOptions } from './rc.interface'
import type { LoggerService } from '@lib/logger'
import { validate } from '@lib/validator/validate'

export class RcService<T = Record<string, unknown>> {
  constructor(
    /** the rc file the configuration was merged from, undefined when there is none */
    public readonly filepath: string | undefined,
    public readonly config: T
  ) {}

  /** Merges the rc file deeply over a copy of the defaults, its arrays replacing those of the defaults. */
  public static merge(defaults: Record<string, unknown>, rc: Record<string, unknown>): Record<string, unknown> {
    return mergeWith(cloneDeep(defaults), rc, (_, value) => (Array.isArray(value) ? value : undefined))
  }

  public static async load(options: RcModuleOptions, oclif: Config, logger: LoggerService): Promise<RcService> {
    const yaml = (_: string, content: string): unknown => parse(content)
    const explorer = cosmiconfig(options.name, {
      searchStrategy: 'global',
      ...options.cosmiconfig,
      loaders: {
        // cosmiconfig names its loaders by the extension of the file
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '.yaml': yaml,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '.yml': yaml,
        noExt: yaml,
        ...options.cosmiconfig?.loaders
      }
    })
    const defaults = typeof options.defaults === 'string' ? (await explorer.load(resolve(oclif.root, options.defaults)))?.config : options.defaults
    const result = await explorer.search(options.cwd)

    logger.setup(RcService.name).trace('Loaded the configuration of %s from: %s', options.name, result?.filepath ?? 'nowhere')

    const config = (options.merge ?? RcService.merge)(defaults ?? {}, result?.config ?? {})

    return new RcService(result?.filepath, options.schema ? ((await validate(options.schema, config)) as Record<string, unknown>) : config)
  }
}
