import { afterEach, describe, expect, it, vi } from 'vitest'

import type { LoggerService, ParserService } from '../src'
import { ConfigEnvKeys, ConfigLoaderService, MergeStrategy } from '../src'

describe('ConfigLoaderService', () => {
  function loader(files: Record<string, unknown> = {}): ConfigLoaderService {
    const parser = {
      read: async(path: string): Promise<unknown> => {
        if (!(path in files)) {
          throw new Error(`ENOENT: ${path}`)
        }

        return files[path]
      },
      parse: (format: string, data: string): unknown => {
        expect(format).toBe('json')

        return JSON.parse(data)
      }
    } as unknown as ParserService

    return new ConfigLoaderService(parser, { setup: vi.fn(), trace: vi.fn() } as unknown as LoggerService)
  }

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  describe('env', () => {
    it('sets the variables that exist without touching the original config', async() => {
      vi.stubEnv('NAME', 'from-env')

      const config = { name: 'default', nested: { keep: true } }
      const result = await loader().env(
        {
          name: 'NAME',
          missing: 'MISSING',
          nested: { empty: null }
        },
        config
      )

      expect(result).toEqual({ name: 'from-env', nested: { keep: true } })
      expect(config).toEqual({ name: 'default', nested: { keep: true } })
      expect(result.nested).toBe(config.nested)
    })

    it('parses a variable with its format and reads the definition from a file', async() => {
      vi.stubEnv('LIST', '["a","b"]')

      const result = await loader({ ['env.json']: { list: { [ConfigEnvKeys.NAME]: 'LIST', [ConfigEnvKeys.PARSER]: 'json' } } }).env('env.json', {})

      expect(result).toEqual({ list: ['a', 'b'] })
    })

    it('expands elements until the first missing index', async() => {
      vi.stubEnv('LIST', '[]')
      vi.stubEnv('LIST_0_NAME', 'first')
      vi.stubEnv('LIST_1_NAME', 'second')
      vi.stubEnv('LIST_3_NAME', 'after a gap')

      const result = await loader().env(
        {
          list: {
            [ConfigEnvKeys.NAME]: 'LIST',
            [ConfigEnvKeys.PARSER]: 'json',
            [ConfigEnvKeys.ELEMENT]: { name: 'LIST_${i}_NAME' }
          }
        },
        {}
      )

      expect(result).toEqual({ list: [{ name: 'first' }, { name: 'second' }] })
    })
  })

  describe('extend', () => {
    it('merges files and objects in order and skips the files it can not read', async() => {
      const result = await loader({ ['a.json']: { a: 1, list: [1] } }).extend<Record<string, unknown>>(['a.json', 'missing.json', { b: 2, list: [2] }], MergeStrategy.EXTEND)

      expect(result).toEqual({
        a: 1,
        b: 2,
        list: [1, 2]
      })
    })

    it('fails when nothing could be read', async() => {
      await expect(loader().extend(['missing.json'])).rejects.toThrow('Nothing to merge, configuration files are empty.')
    })
  })
})
