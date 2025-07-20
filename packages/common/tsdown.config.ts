/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsdown'

export default defineConfig((options) => ({
  name: !options.watch ? 'production' : undefined,

  entry: ['src/index.ts'],
  tsconfig: options.watch ? 'tsconfig.json' : 'tsconfig.build.json',

  dts: true,

  format: ['esm'],

  target: ['es2021'],

  sourcemap: options.watch ? true : false,

  splitting: true,
  clean: true,
  minify: false,
  keepNames: true
}))
