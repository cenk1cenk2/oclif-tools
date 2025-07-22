/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsdown'

export default defineConfig((options) => ({
  name: !options.watch ? 'production' : undefined,

  entry: ['src/index.ts'],
  tsconfig: options.watch ? 'tsconfig.json' : 'tsconfig.build.json',

  dts: true,

  format: ['esm'],

  sourcemap: options.watch ? true : false,

  unbundle: true,
  splitting: false,
  minify: false,
  keepNames: true,
  inputOptions: {
    transform: {
      assumptions: {
        setPublicClassFields: true
      },
      typescript: {
        removeClassFieldsWithoutInitializer: true
      },
      decorator: {
        legacy: true,
        emitDecoratorMetadata: true
      }
    }
  }
}))
