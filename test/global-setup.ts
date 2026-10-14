import { execFileSync } from 'child_process'
import { mkdirSync, rmSync, symlinkSync } from 'fs'
import { join } from 'path'

// the fixtures run in their own processes against the built package, which the fixture cli finds as its dependency
export default function setup(): void {
  const root = join(import.meta.dirname, '..')
  const cli = join(import.meta.dirname, 'fixtures', 'cli')
  const link = join(cli, 'node_modules', '@cenk1cenk2', 'oclif-common')

  execFileSync('pnpm', ['run', 'build'], { cwd: root, stdio: 'ignore' })

  rmSync(link, { recursive: true, force: true })
  mkdirSync(join(link, '..'), { recursive: true })
  symlinkSync(root, link, 'dir')

  execFileSync('pnpm', ['exec', 'tsc', '-p', cli], { cwd: root, stdio: 'inherit' })
}
