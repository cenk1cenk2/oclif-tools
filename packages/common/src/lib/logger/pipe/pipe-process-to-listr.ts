import type { ChildProcess } from 'child_process'
import type { ListrTaskWrapper } from 'listr2'

export function pipeProcessThroughListr (task: ListrTaskWrapper<any, any, any>, instance: ChildProcess): ChildProcess {
  instance.stdout.pipe(task.stdout())
  instance.stderr.pipe(task.stdout())

  return instance
}
