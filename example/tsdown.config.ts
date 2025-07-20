/* eslint-disable import/no-extraneous-dependencies */
import { execaCommand as command } from 'execa'
import { defineConfig } from 'tsdown'

export default defineConfig((options) => ({
  name: !options.watch ? 'production' : undefined,

  entry: ['src/**/*.{js,ts}'],
  tsconfig: options.watch ? 'tsconfig.json' : 'tsconfig.build.json',

  dts: options.watch ? true : false,

  format: ['esm'],

  target: ['es2021'],

  sourcemap: options.watch ? true : false,

  unbundle: true,
  splitting: false,
  clean: true,
  minify: false,
  keepNames: true,

  onSuccess: async (): Promise<void> => {
    await Promise.all([command('pnpm run manifest', { stdout: process.stdout, stderr: process.stderr })])
  }
}))
