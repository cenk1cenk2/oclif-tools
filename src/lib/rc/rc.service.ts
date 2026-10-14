import { cosmiconfig } from 'cosmiconfig'
import { parse } from 'yaml'

import type { RcModuleOptions } from './rc.interface'
import type { LoggerService } from '@lib/logger'
import type { ValidatorService } from '@lib/validator'

export class RcService<T = Record<string, unknown>> {
  constructor(
    /** the file the configuration was loaded from, undefined when there is none */
    public readonly filepath: string | undefined,
    public readonly config: T
  ) {}

  public static async load(options: RcModuleOptions, validator: ValidatorService, logger: LoggerService): Promise<RcService> {
    const yaml = (_: string, content: string): unknown => parse(content)
    const result = await cosmiconfig(options.name, {
      searchStrategy: 'global',
      loaders: {
        // cosmiconfig names its loaders by the extension of the file
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '.yaml': yaml,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '.yml': yaml,
        noExt: yaml
      }
    }).search(options.cwd)

    logger.setup(RcService.name).trace('Loaded the configuration of %s from: %s', options.name, result?.filepath ?? 'nowhere')

    const config = result?.config ?? {}

    return new RcService(result?.filepath, options.schema ? await validator.validate(options.schema, config) : config)
  }
}
