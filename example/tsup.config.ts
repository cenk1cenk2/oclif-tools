/* eslint-disable import/no-extraneous-dependencies */
import { esbuildDecorators } from '@anatine/esbuild-decorators'
import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  name: !options.watch && 'production',

  entry: [ 'src/**/*.ts' ],
  tsconfig: options.watch ? 'tsconfig.json' : 'tsconfig.build.json',

  dts: options.watch && true,

  format: [ 'cjs' ],

  target: [ 'es2021' ],

  sourcemap: options.watch && true,

  splitting: false,
  clean: true,
  minify: false,

  onSuccess: 'yarn run manifest',
  esbuildPlugins: [ esbuildDecorators() ]
}))
