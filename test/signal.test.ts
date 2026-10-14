import { spawn } from 'child_process'
import { join } from 'path'
import { describe, expect, it } from 'vitest'

describe('signals', () => {
  it('lets the handler finish on SIGINT, then closes the application and exits with the code of the signal', async() => {
    // vitest sets NODE_ENV to test, in which oclif would load the commands from the typescript sources of the fixture
    const env = { ...process.env }

    delete env.NODE_ENV

    const child = spawn(process.execPath, [join(import.meta.dirname, 'fixtures/cli/bin/run.ts'), 'signal'], { stdio: ['ignore', 'pipe', 'pipe'], env })
    let stdout = ''

    child.stdout.on('data', (chunk: Buffer) => {
      stdout += chunk.toString()

      if (chunk.toString().includes('READY')) {
        child.kill('SIGINT')
      }
    })

    const code = await new Promise<number>((resolve) => child.on('exit', resolve))

    expect(code).toBe(130)
    expect(stdout).toContain('Received SIGINT, stopping the command')
    expect(stdout.indexOf('TASK DONE')).toBeGreaterThan(-1)
    expect(stdout.indexOf('TASK DONE')).toBeLessThan(stdout.indexOf('DESTROYED'))
  })
})
