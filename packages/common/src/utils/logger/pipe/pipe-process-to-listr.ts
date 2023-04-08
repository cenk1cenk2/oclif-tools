import type { ExecaChildProcess } from 'execa'
import type { ListrTaskWrapper } from 'listr2'

export function pipeProcessThroughListr (task: ListrTaskWrapper<any, any>, instance: ExecaChildProcess): ExecaChildProcess {
  instance.stdout.pipe(task.stdout())
  instance.stderr.pipe(task.stdout())

  return instance
}
