import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    tsconfigPaths: true
  },
  // the tests live outside the tsconfig include, so they do not inherit its decorator settings
  oxc: {
    decorator: {
      legacy: true,
      emitDecoratorMetadata: true
    }
  },
  test: {
    include: ['test/**/*.test.ts'],
    globalSetup: ['test/global-setup.ts']
  }
})
