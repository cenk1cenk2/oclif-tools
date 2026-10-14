# @cenk1cenk2/oclif-common

Oclif common package for [oclif2](https://github.com/oclif/core) projects.

Shared building blocks for oclif-based CLIs: base commands, hooks, interfaces and utility helpers that the CLIs in this organisation compose instead of re-implementing.

## Install

```sh
pnpm add @cenk1cenk2/oclif-common
```

The package is ESM-only. Node.js >= 24 is required.

## Usage

Extend the exported base command and run it through an injectable handler. The `commands/` and `lib/` exports cover the shared command and the DI container setup used across the CLIs built on this package.

### Plugin

The package is also an oclif plugin that registers a `command_not_found` hook, which reports the unknown command and prints the help. Enable it by listing the package in the plugins of your CLI's `package.json`:

```json
{
  "oclif": {
    "plugins": ["@cenk1cenk2/oclif-common"]
  }
}
```

### Commands

A command is an oclif command, a NestJS module and an injectable handler:

```
src/commands/build.ts                 # the oclif command: description, flags, args, static module, static handler
src/modules/build/build.module.ts     # the root module of the command, which provides the handler
src/modules/build/build.handler.ts    # the @Injectable() handler that runs the command
src/modules/shared/shared.module.ts   # optional, the modules every command imports
```

A single-command CLI keeps its command in `src/commands/index.ts` and names its module directory after the CLI. Modules and handlers stay out of `src/commands`: oclif discovers commands by globbing every file in that directory and turns each file name into a command id, so a module or a handler there would show up as a broken command.

- The command extends `Command` and declares the oclif side: its description, `static flags`, `static args`, its root module as `static module` and its handler as `static handler`.
- The module imports the optional modules the command needs and provides the handler.
- The handler implements `CommandHandler<typeof MyCommand>`, gets its dependencies through its constructor and the parsed flags and args in `run({ flags, args })`.

The base command parses the flags and args, boots the module into an application context, resolves the handler from it and runs it, and closes the context once the command ends, whether it failed or not. `SIGINT` and `SIGTERM` close it through NestJS shutdown hooks as well.

```ts
// src/commands/print.ts
import { Command, Flags } from '@cenk1cenk2/oclif-common'

import { PrintHandler } from '../modules/print/print.handler.js'
import { PrintModule } from '../modules/print/print.module.js'

export default class Print extends Command {
  static description = 'Print a document.'

  static module = PrintModule

  static handler = PrintHandler

  static flags = {
    browser: Flags.string()
  }
}
```

```ts
// src/modules/shared/shared.module.ts
import { LogLevels, LoggerModule, LogoModule, TaskModule } from '@cenk1cenk2/oclif-common'
import { Module } from '@nestjs/common'

@Module({
  imports: [LoggerModule.forRoot({ stderr: Object.values(LogLevels) }), LogoModule.forRoot(), TaskModule.forRoot()]
})
export class SharedModule {}
```

```ts
// src/modules/print/print.module.ts
import { JsonParser, ParserModule, TOKEN_COMMAND_FLAGS, YamlParser } from '@cenk1cenk2/oclif-common'
import { Module } from '@nestjs/common'

import { PrintHandler } from './print.handler.js'
import { SharedModule } from '../shared/shared.module.js'

@Module({
  imports: [
    SharedModule,
    ParserModule.forRoot({ parsers: [JsonParser, YamlParser] }),
    PrinterModule.forRootAsync({ inject: [TOKEN_COMMAND_FLAGS], useFactory: (flags) => ({ browser: flags.browser }) })
  ],
  providers: [PrintHandler]
})
export class PrintModule {}
```

```ts
// src/modules/print/print.handler.ts
import type { CommandHandler, CommandInput } from '@cenk1cenk2/oclif-common'
import { LoggerService, TaskManager } from '@cenk1cenk2/oclif-common'
import { Injectable } from '@nestjs/common'

import type Print from '../../commands/print.js'

@Injectable()
export class PrintHandler implements CommandHandler<typeof Print> {
  constructor(
    private readonly logger: LoggerService,
    private readonly tasks: TaskManager,
    private readonly printer: PrinterService
  ) {}

  public async run({ flags }: CommandInput<typeof Print>): Promise<void> {
    this.logger.info('Printing with %s.', flags.browser)

    this.tasks.add([{ title: 'Print', task: () => this.printer.print() }])

    await this.tasks.runAll()
  }
}
```

Constructor injection reads the parameter types that TypeScript emits, so build with `experimentalDecorators` and `emitDecoratorMetadata`, and import injected services as values: an `import type`, or an interface as the parameter type, leaves nothing to resolve at runtime. Inject interfaces through a token with `@Inject(token)`.

A handler needs no oclif to be tested: compile it in a `Test.createTestingModule` of `@nestjs/testing` with its dependencies, and call `run` with the flags and args.

### Modules and services

Every command boots with the runtime modules only:

- `ConfigModule` with `ConfigService`, the runtime config of the command.
- `CommandModule` with the running command: parsed flags through `TOKEN_COMMAND_FLAGS`, arguments through `TOKEN_COMMAND_ARGS`, the oclif `Config` through `TOKEN_OCLIF_CONFIG` and the command class through `TOKEN_COMMAND`, for module factories and services alike.
- `LoggerModule` with `LoggerService`. It writes `FATAL` and `ERROR` to stderr and every other level to stdout; import `LoggerModule.forRoot({ stderr })` anywhere in the module of the command, such as a shared module, to list the levels written to stderr instead. A command that fails before its logger options are known writes every level to stderr.

Everything else is imported by the module of the command, each module with its own options:

| Module | Provides |
| --- | --- |
| `TaskModule.forRoot(options?)` | `TaskManager`, the listr2 task manager, which renders plainly at debug level and stays silent for silent or JSON output; `options` override the defaults. |
| `ParserModule.forRoot({ parsers })` | `ParserService` and `ConfigLoaderService` with the given parsers, `[JsonParser]` by default, and the `FilesystemModule` they read through. |
| `FilesystemModule` | `FileSystemService`. |
| `LogoModule.forRoot({ generator })` | `LogoService`, which prints the logo when the command starts, at `INFO`, so it follows the stderr levels of the logger. |
| `ValidatorModule` | `ValidatorService`, which validates with any Standard Schema. |

`pipeProcessToLogger(logger, process)` and `pipeProcessThroughListr(task, process)` pipe a child process from any service.

## Migration

From commands that ran themselves:

- Move the command to `src/commands`, its module and handler to `src/modules/<command>`. Move the body of `run()` into the `run({ flags, args })` of an `@Injectable()` handler, provide it in the module and set `static module` and `static handler`. A command no longer implements `run()`, and every command declares its module.
- Replace `CliModule.forRoot({ logger, parser, logo })` with the modules it configured: `LoggerModule.forRoot({ stderr })`, `ParserModule.forRoot({ parsers })`, `LogoModule.forRoot({ generator })`, plus `FilesystemModule`, `TaskModule.forRoot()` and `ValidatorModule` where the command uses them. None of them is provided by default any more.
- Replace `ConfigService.read`, `write`, `extend`, `merge` and `env` with `ConfigLoaderService` from `ParserModule`.
- Replace `@Inject()` properties with constructor parameters of the handler. `@Optional()` stays available on constructor parameters.
- Replace `this.logger` with an injected `LoggerService`, `this.tasks` with an injected `TaskManager`, and `this.flags` / `this.args` with the input of `run`, or `TOKEN_COMMAND_FLAGS` / `TOKEN_COMMAND_ARGS` in services. Tasks no longer run on their own after the command: call `await this.tasks.runAll()` in the handler.
- Replace `this.setCtxDefaults(...)` / `this.setCtxAssign(...)` with `setCtxDefaults(tasks.options.ctx, ...)` / `setCtxAssign(tasks.options.ctx, ...)`, and `this.pipeProcessToLogger(...)` / `this.pipeProcessThroughListr(...)` with `pipeProcessToLogger(logger, ...)` / `pipeProcessThroughListr(task, ...)`.
- `Command` takes no type parameters any more, type the handler with `CommandHandler<typeof MyCommand>` instead.

## Development

This package lives in the `oclif-tools` pnpm workspace. Build, lint and test run from the repository root:

```sh
pnpm install
pnpm lint
pnpm build
pnpm test
```

Releases are cut by `multi-semantic-release` from `main` and published through npm staged publishing - the `npm stage publish` step parks the version for maintainer approval with 2FA before it reaches the registry.
