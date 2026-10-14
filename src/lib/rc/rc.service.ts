import type { Config } from '@oclif/core'
import { cosmiconfig } from 'cosmiconfig'
import { resolve } from 'path'
import { parse } from 'yaml'

import type { RcModuleOptions } from './rc.interface'
import type { LoggerService } from '@lib/logger'
import type { ValidatorService } from '@lib/validator'
import { MergeStrategy, merge } from '@utils'

export class RcService<T = Record<string, unknown>> {
  constructor(
    /** the rc file the configuration was merged from, undefined when there is none */
    public readonly filepath: string | undefined,
    public readonly config: T
  ) {}

  public static async load(options: RcModuleOptions, oclif: Config, validator: ValidatorService, logger: LoggerService): Promise<RcService> {
    const yaml = (_: string, content: string): unknown => parse(content)
    const explorer = cosmiconfig(options.name, {
      searchStrategy: 'global',
      loaders: {
        // cosmiconfig names its loaders by the extension of the file
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '.yaml': yaml,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '.yml': yaml,
        noExt: yaml
      }
    })
    const defaults = typeof options.defaults === 'string' ? (await explorer.load(resolve(oclif.root, options.defaults)))?.config : options.defaults
    const result = await explorer.search(options.cwd)

    logger.setup(RcService.name).trace('Loaded the configuration of %s from: %s', options.name, result?.filepath ?? 'nowhere')

    const config = merge<Record<string, unknown>>(MergeStrategy.OVERWRITE, defaults ?? {}, result?.config ?? {})

    return new RcService(result?.filepath, options.schema ? ((await validator.validate(options.schema, config)) as Record<string, unknown>) : config)
  }
}
