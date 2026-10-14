import { describe, expect, it, vi } from 'vitest'

import type { GenericParser, LoggerService } from '../src'
import { EnvironmentVariableParser, JsonParser, YamlParser } from '../src'

describe('parsers', () => {
  const logger = { setup: vi.fn(), trace: vi.fn() } as unknown as LoggerService

  describe.each<[string, GenericParser]>([
    ['JsonParser', new JsonParser(logger)],
    ['YamlParser', new YamlParser(logger)],
    ['EnvironmentVariableParser', new EnvironmentVariableParser(logger)]
  ])('%s', (_, parser) => {
    it('reads back what it writes, also on a second call', () => {
      const data = {
        NAME: 'value',
        MULTI: 'first\nsecond',
        QUOTED: 'say "hi" # not a comment',
        SPACED: ' padded '
      }

      expect(parser.parse(parser.stringify(data))).toEqual(data)
      expect(parser.parse(parser.stringify(data))).toEqual(data)
    })
  })

  describe('EnvironmentVariableParser', () => {
    it('reads multi-line values, exports and comments', () => {
      const parser = new EnvironmentVariableParser(logger)
      const env = 'A=1\nB="first\nsecond"\n# a comment\nexport C=3 # trailing\n'

      expect(parser.parse(env)).toEqual({
        A: '1',
        B: 'first\nsecond',
        C: '3'
      })
      expect(parser.parse(env)).toEqual({
        A: '1',
        B: 'first\nsecond',
        C: '3'
      })
    })
  })
})
