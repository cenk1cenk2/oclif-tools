import { Test } from '@nestjs/testing'
import { describe, expect, it, vi } from 'vitest'

import type { GenericParser, LoggerService } from '../src'
import { ConfigModule, EnvironmentVariableParser, JsonParser, LogLevels, LoggerModule, ParserModule, ParserService, YamlParser } from '../src'

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

  describe('options', () => {
    it('passes the json and yaml options to the libraries', () => {
      const data = { list: ['a'], skipped: 'value' }
      const json = new JsonParser(logger, { json: { space: 4, replacer: (key: string, value: unknown): unknown => (key === 'skipped' ? undefined : value) } })
      const yaml = new YamlParser(logger, { yaml: { stringify: { indent: 4, indentSeq: true } } })

      expect(json.stringify(data)).toBe('{\n    "list": [\n        "a"\n    ]\n}')
      expect(yaml.stringify({ list: data.list })).toBe('list:\n    - a\n')
    })

    it('takes them from the parser module', async() => {
      const module = await Test.createTestingModule({
        imports: [ConfigModule.forRoot({ config: { logLevel: LogLevels.INFO, isJson: false } }), LoggerModule, ParserModule.forRoot({ json: { space: 0 } })]
      }).compile()

      await module.init()

      expect(module.get(ParserService).stringify('data.json', { a: 1 })).toBe('{"a":1}')
    })
  })
})
