import { afterEach, describe, expect, it, vi } from 'vitest'

import type { ConfigModuleOptions, LoggerModuleOptions } from '../src'
import { LogLevels, LoggerService } from '../src'

describe('LoggerService', () => {
  function capture(): { stdout: string[]; stderr: string[] } {
    const output = { stdout: [] as string[], stderr: [] as string[] }

    for (const stream of ['stdout', 'stderr'] as const) {
      vi.spyOn(process[stream], 'write').mockImplementation((chunk: string | Uint8Array): boolean => {
        output[stream].push(...chunk.toString().trimEnd().split('\n'))

        return true
      })
    }

    return output
  }

  function logger(logLevel: LogLevels, options: LoggerModuleOptions = {}, isJson = false): LoggerService {
    return new LoggerService({ config: { logLevel, isJson } } as ConfigModuleOptions, options)
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('drops messages above the configured level', () => {
    const output = capture()
    const l = logger(LogLevels.INFO)

    l.warn('warn')
    l.info('info')
    l.verbose('verbose')
    l.debug('debug')
    l.trace('trace')

    expect(output.stdout).toEqual(['⚠ warn', '› info'])
  })

  it('prints nothing when silent or answering in json', () => {
    const output = capture()

    logger(LogLevels.SILENT).fatal('silent')
    logger(LogLevels.TRACE, {}, true).fatal('json')

    expect(output).toEqual({ stdout: [], stderr: [] })
  })

  it('writes only fatal and error to stderr by default', () => {
    const output = capture()
    const l = logger(LogLevels.INFO)

    l.fatal('fatal')
    l.error('error')
    l.info('info')

    expect(output).toEqual({ stdout: ['› info'], stderr: ['[F] fatal', '✖ error'] })
  })

  it('writes every level to stderr with the stderr option', () => {
    const output = capture()
    const l = logger(LogLevels.INFO, { stderr: true })

    l.error('error')
    l.info('info')
    l.direct('direct')

    expect(output).toEqual({ stdout: [], stderr: ['✖ error', '› info', 'direct'] })
  })

  it('interpolates placeholders and keeps the remaining arguments as metadata', () => {
    const output = capture()
    const l = logger(LogLevels.TRACE).setup('Context')

    l.info('hello %s', 'world', 'unused')
    l.trace('code -> %d', 5, { status: 'exit', context: 'ignored' })
    l.run('command', { level: LogLevels.WARN })

    expect(output.stdout).toEqual(['› [Context] hello world', '[T] [Context] [exit] code -> 5', '⚠ [Context] [run] command'])
  })

  it('prefixes every line and drops lines with only whitespace', () => {
    const output = capture()

    logger(LogLevels.INFO).info('first\n  \n\nsecond')

    expect(output.stdout).toEqual(['› first', '› ', '› second'])
  })

  it('ignores calls whose level is not a log level', () => {
    const output = capture()

    logger(LogLevels.TRACE).log('Starting Nest application...' as LogLevels, 'NestFactory')

    expect(output).toEqual({ stdout: [], stderr: [] })
  })
})
