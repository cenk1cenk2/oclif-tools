/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  name: !options.watch ? 'production' : undefined,

  entry: ['src/index.ts'],
  tsconfig: options.watch ? 'tsconfig.json' : 'tsconfig.build.json',

  dts: true,

  format: ['esm'],

  target: ['es2021'],

  sourcemap: options.watch ? true : false,

  bundle: true,
  splitting: true,
  clean: true,
  minify: false,
  keepNames: true
}))
