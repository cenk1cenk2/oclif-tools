import { Inject, Injectable, Module } from '@nestjs/common'
import { handle } from '@oclif/core'

import { Command, TaskManager, TaskModule } from '../../../dist/index.mjs'

class SignalHandler {
  constructor(tasks) {
    this.tasks = tasks
  }

  async run({ signal }) {
    this.tasks.add([
      {
        title: 'wait for the signal',
        task: async() => {
          process.stdout.write('READY\n')

          // the interval stands for the work of the task, which keeps the process alive until the signal arrives
          await new Promise((resolve) => {
            const work = setInterval(() => {}, 1000)

            signal.addEventListener('abort', () => {
              clearInterval(work)
              resolve()
            })
          })
          await new Promise((resolve) => setTimeout(resolve, 100))

          process.stdout.write('TASK DONE\n')
        }
      }
    ])

    await this.tasks.runAll()
  }
}

Injectable()(SignalHandler)
Inject(TaskManager)(SignalHandler, undefined, 0)

class Resource {
  onModuleDestroy() {
    process.stdout.write('DESTROYED\n')
  }
}

Injectable()(Resource)

class SignalModule {}

Module({ imports: [TaskModule.forRoot()], providers: [SignalHandler, Resource] })(SignalModule)

class Signal extends Command {
  static module = SignalModule
  static handler = SignalHandler
}

await Signal.run(process.argv.slice(2), { root: import.meta.dirname }).catch(handle)
