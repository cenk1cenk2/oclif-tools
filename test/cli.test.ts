import { spawnSync } from 'child_process'
import { join } from 'path'
import { describe, expect, it } from 'vitest'

describe('fixture cli', () => {
  function cli(...argv: string[]): { status: number; stdout: string; stderr: string } {
    // vitest sets NODE_ENV to test, in which oclif would load the commands from the typescript sources of the fixture
    const env = { ...process.env }

    delete env.NODE_ENV

    const { status, stdout, stderr } = spawnSync(process.execPath, [join(import.meta.dirname, 'fixtures/cli/bin/run.js'), ...argv], { encoding: 'utf-8', env })

    return {
      status,
      stdout,
      stderr
    }
  }

  it('lists only its commands in the help', () => {
    const { status, stdout } = cli('--help')
    const commands = stdout
      .slice(stdout.indexOf('COMMANDS'))
      .split('\n')
      .slice(1)
      .filter((line) => line.trim() !== '')
      .map((line) => line.trim().split(/\s+/)[0])

    expect(status).toBe(0)
    expect(commands).toEqual(['goodbye', 'hello'])
  })

  it('runs each command through its handler with the shared modules', () => {
    const hello = cli('hello', 'you', '--from', 'test')
    const goodbye = cli('goodbye')

    expect(hello.status).toBe(0)
    expect(hello.stdout).toContain('fixture v1.0.0')
    expect(hello.stdout).toContain('› hello you from test')
    expect(hello.stdout).toContain('Greet')
    expect(goodbye.status).toBe(0)
    expect(goodbye.stdout).toContain('› goodbye world')
  })

  it('reports a mistyped command through the not-found hook of the plugin', () => {
    const { status, stderr } = cli('helo')

    expect(status).toBe(127)
    expect(stderr).toContain('Command not found.')
  })

  it('reports an unknown flag once', () => {
    const { status, stderr } = cli('hello', '--nope')

    expect(status).toBe(2)
    expect(stderr.split('\n').filter((line) => line.includes('Nonexistent flag'))).toEqual(['[F] Nonexistent flag: --nope'])
    expect(stderr).not.toContain('Error:')
  })
})
