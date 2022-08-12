/* eslint-disable import/no-extraneous-dependencies */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [ '@cenk1cenk2/eslint-config/typescript-dynamic', '@cenk1cenk2/eslint-config/import-strict' ],
  overrides: [ ...require('@cenk1cenk2/eslint-config/utils').generateImportGroupsWithOverride({ tsconfigDir: __dirname, tsconfig: 'tsconfig.json' }) ],
  rules: {}
}
