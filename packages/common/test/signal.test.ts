import { spawn } from 'child_process'
import { join } from 'path'
import { describe, expect, it } from 'vitest'

describe('signals', () => {
  it('lets the handler finish on SIGINT, then closes the application and exits with the code of the signal', async() => {
    const child = spawn(process.execPath, [join(import.meta.dirname, 'fixtures/signal/cli.mjs')], { stdio: ['ignore', 'pipe', 'pipe'] })
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
