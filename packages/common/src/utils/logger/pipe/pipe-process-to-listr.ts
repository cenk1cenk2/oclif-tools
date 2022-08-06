import type { ExecaChildProcess } from 'execa'
import type { ListrTaskWrapper } from 'listr2'
import through from 'through'

export function pipeProcessThroughListr (task: ListrTaskWrapper<any, any>, instance: ExecaChildProcess): ExecaChildProcess {
  const logOut = through((chunk: Buffer | string) => {
    task.output = chunk?.toString('utf-8').trim()
  })

  // do the action
  instance.stdout.pipe(logOut)
  instance.stderr.pipe(logOut)

  return instance
}
