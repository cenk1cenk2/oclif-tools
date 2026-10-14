import type { StandardSchemaV1 } from '@standard-schema/spec'

export interface RcModuleOptions {
  /** the name the rc files are found by, such as `.namerc.yaml`, `name.config.ts` or the `name` key of a package.json */
  name: string
  /** the bundled base configuration, a file relative to the root of the CLI or an object, which the rc file is merged over */
  defaults?: string | Record<string, unknown>
  /** validates the merged configuration and provides its output instead */
  schema?: StandardSchemaV1
  /** the directory to search upward from, the working directory by default */
  cwd?: string
}
