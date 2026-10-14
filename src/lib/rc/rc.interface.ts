import type { StandardSchemaV1 } from '@standard-schema/spec'
import type { Options } from 'cosmiconfig'

export interface RcModuleOptions {
  /** the name the rc files are found by, such as `.namerc.yaml`, `name.config.ts` or the `name` key of a package.json */
  name: string
  /** the bundled base configuration, a file relative to the root of the CLI or an object, which the rc file is merged over */
  defaults?: string | Record<string, unknown>
  /** validates the merged configuration and provides its output instead */
  schema?: StandardSchemaV1
  /** the directory to search upward from, the working directory by default */
  cwd?: string
  /** merges the rc file over the defaults, by default deeply with the arrays of the rc file replacing those of the defaults */
  merge?: (defaults: Record<string, unknown>, rc: Record<string, unknown>) => Record<string, unknown>
  /** the options of cosmiconfig over the defaults, the global search strategy and YAML through the yaml package, its loaders merged with these */
  cosmiconfig?: Partial<Options>
}
