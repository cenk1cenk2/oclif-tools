import { configs, utils } from '@cenk1cenk2/eslint-config'
import type { Linter } from 'eslint'

export default [
  ...configs['typescript-dynamic'],
  ...utils.configImportGroup({ tsconfigDir: import.meta.dirname, tsconfig: 'tsconfig.json' }),
  {
    rules: {
      'import/no-extraneous-dependencies': 'off'
    }
  },
  {
    files: ['test/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: 'test/tsconfig.json'
      }
    }
  },
  {
    // the fixture cli is a project of its own, which the test setup compiles against the built package
    ignores: ['tsdown.config.ts', 'vitest.config.ts', 'eslint.config.ts', '.prettierrc.ts', 'test/fixtures/cli/**']
  }
] satisfies Linter.Config[]
