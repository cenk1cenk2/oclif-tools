import base from '../../eslint.config.mjs'
import { utils } from '@cenk1cenk2/eslint-config'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...base,
  ...utils.configImportGroup({ tsconfigDir: import.meta.dirname, tsconfig: 'tsconfig.json' }),
  {
    ignores: ['/tsdown.config.ts']
  }
]
