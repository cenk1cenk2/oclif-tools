import { Test } from '@nestjs/testing'
import type { StandardSchemaV1 } from '@standard-schema/spec'
import { mkdir, mkdtemp, rm, writeFile } from 'fs/promises'
import { tmpdir } from 'os'
import { join } from 'path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { RcModuleOptions } from '../src'
import { ConfigModule, LogLevels, LoggerModule, RcModule, RcService, TOKEN_RC, ValidationError } from '../src'

describe('RcModule', () => {
  const name = 'oclif-common-rc-test'
  let root: string
  let cwd: string

  async function load(options: Partial<RcModuleOptions> = {}): Promise<{ rc: RcService; config: unknown }> {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ config: { logLevel: LogLevels.INFO, isJson: false } }),
        LoggerModule,
        RcModule.forRoot({
          name,
          cwd,
          ...options
        })
      ]
    }).compile()

    return { rc: module.get(RcService), config: module.get(TOKEN_RC) }
  }

  beforeEach(async() => {
    root = await mkdtemp(join(tmpdir(), 'rc-'))
    cwd = join(root, 'nested', 'deeper')

    await mkdir(cwd, { recursive: true })
  })

  afterEach(async() => {
    await rm(root, { recursive: true, force: true })
  })

  it('finds a yaml rc file upward from the working directory', async() => {
    await writeFile(join(root, `.${name}rc.yaml`), 'output: dist\nlist:\n  - a\n')

    const { rc, config } = await load()

    expect(config).toEqual({ output: 'dist', list: ['a'] })
    expect(rc.config).toBe(config)
    expect(rc.filepath).toBe(join(root, `.${name}rc.yaml`))
  })

  it('reads the key of the name in a package.json', async() => {
    await writeFile(join(root, 'nested', 'package.json'), JSON.stringify({ name: 'some-package', [name]: { output: 'pkg' } }))

    expect((await load()).config).toEqual({ output: 'pkg' })
  })

  it('provides an empty configuration when there is no rc file', async() => {
    const { rc, config } = await load()

    expect(config).toEqual({})
    expect(rc.filepath).toBeUndefined()
  })

  describe('with a schema', () => {
    const schema: StandardSchemaV1<unknown, { output: string }> = {
      // the property name is fixed by the standard schema spec
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '~standard': {
        version: 1,
        vendor: 'test',
        validate: (value: any) =>
          typeof value?.output === 'string' ? { value: { output: value.output.toUpperCase() } } : { issues: [{ message: 'Expected a string.', path: ['output'] }] }
      }
    }

    it('provides the output of the schema', async() => {
      await writeFile(join(root, `.${name}rc.json`), JSON.stringify({ output: 'dist' }))

      expect((await load({ schema })).config).toEqual({ output: 'DIST' })
    })

    it('fails on a configuration the schema rejects', async() => {
      vi.spyOn(process.stderr, 'write').mockImplementation(() => true)
      await writeFile(join(root, `.${name}rc`), 'output: 1\n')

      await expect(load({ schema })).rejects.toBeInstanceOf(ValidationError)

      vi.restoreAllMocks()
    })
  })
})
