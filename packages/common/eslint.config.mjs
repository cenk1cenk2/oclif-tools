import base from '../../eslint.config.mjs'
import { utils } from '@cenk1cenk2/eslint-config'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...base,
  ...utils.configImportGroup({ tsconfigDir: import.meta.dirname, tsconfig: 'tsconfig.json' }),
  {
    files: ['test/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: 'test/tsconfig.json'
      }
    }
  },
  {
    files: ['test/fixtures/**/*.mjs'],
    languageOptions: {
      globals: {
        process: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly'
      }
    }
  },
  {
    // the fixture cli is a project of its own, which the test setup compiles against the built package
    ignores: ['tsdown.config.ts', 'vitest.config.ts', 'test/fixtures/cli/**']
  }
]
