import { execFileSync } from 'child_process'
import { join } from 'path'

// the fixtures run in their own processes against the built package
export default function setup(): void {
  execFileSync('pnpm', ['run', 'build'], { cwd: join(import.meta.dirname, '..'), stdio: 'ignore' })
}
