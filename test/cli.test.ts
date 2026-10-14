import { spawnSync } from 'child_process'
import { join } from 'path'
import { describe, expect, it } from 'vitest'

describe('fixture cli', () => {
  // vitest sets NODE_ENV to test, in which oclif would load the commands from the typescript sources of the fixture
  function withoutNodeEnv(): NodeJS.ProcessEnv {
    const env = { ...process.env }

    delete env.NODE_ENV

    return env
  }

  function cli(...argv: string[]): { status: number; stdout: string; stderr: string } {
    const { status, stdout, stderr } = spawnSync(process.execPath, [join(import.meta.dirname, 'fixtures/cli/bin/run.ts'), ...argv], { encoding: 'utf-8', env: withoutNodeEnv() })

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
    const goodbye = cli('goodbye', '--tone', 'polite')

    expect(hello.status).toBe(0)
    expect(hello.stdout).toContain('fixture v1.0.0')
    expect(hello.stdout).toContain('› hello you from test')
    expect(hello.stdout).toContain('Greet')
    expect(goodbye.status).toBe(0)
    expect(goodbye.stdout).toContain('› goodbye world')
  })

  it('validates the input with the schema of the command', () => {
    const valid = cli('hello', '--times', '3', '--excited')
    const invalid = cli('hello', '--excited')

    expect(valid.status).toBe(0)
    expect(valid.stdout).toContain('› hello world from fixture x3!')
    expect(invalid.status).toBe(2)
    expect(invalid.stderr.split('\n').filter((line) => line.includes('--excited needs --times above 1'))).toEqual(['[F] flags: --excited needs --times above 1'])
    expect(invalid.stderr).not.toContain('Error:')
  })

  it('describes the flags and args from the schema in the help and the manifest', () => {
    const hello = cli('hello', '--help')
    const goodbye = cli('goodbye', '--help')
    const manifest = spawnSync(
      process.execPath,
      [
        '--input-type=module',
        '-e',
        [
          'const { Config } = await import(\'@oclif/core\')',
          'const config = await Config.load(process.argv[1])',
          'console.log(JSON.stringify(config.findCommand(\'goodbye\').flags.tone))'
        ].join('\n'),
        join(import.meta.dirname, 'fixtures/cli')
      ],
      {
        encoding: 'utf-8',
        cwd: join(import.meta.dirname, 'fixtures/cli'),
        env: withoutNodeEnv()
      }
    )

    expect(hello.stdout).toMatch(/--from=<value>\s+\[default: fixture] Whom is saying hello/)
    expect(hello.stdout).toMatch(/--times=<value>\s+\[default: 1] How many times to say hello/)
    expect(hello.stdout).toMatch(/\[PERSON]\s+\[default: world] Person to say hello to/)
    expect(goodbye.stdout).toMatch(/--tone=<option>\s+\(required\) How to say goodbye/)
    expect(goodbye.stdout).toContain('<options: polite|casual>')
    expect(JSON.parse(manifest.stdout)).toMatchObject({
      required: true,
      options: ['polite', 'casual'],
      description: 'How to say goodbye'
    })
  })

  it('rejects a missing required value through the schema only', () => {
    const { status, stderr } = cli('goodbye')

    expect(status).toBe(2)
    expect(stderr.trimEnd().split('\n')).toEqual(['[F] flags.tone: Invalid option: expected one of "polite"|"casual"'])
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
