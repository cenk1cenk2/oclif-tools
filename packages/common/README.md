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

A command is three files next to each other, `index.ts`, `index.module.ts` and `index.handler.ts` for a command directory, or `build.ts`, `build.module.ts` and `build.handler.ts` for each command of a multi-command directory:

- the command extends `Command` and declares the oclif side: its description, `static flags`, `static args`, its root module as `static module` and its handler as `static handler`.
- the module is a NestJS module that imports `CliModule.forRoot()` with the options of the shared modules, adds the modules of the command and provides the handler.
- the handler is an `@Injectable()` class implementing `CommandHandler<typeof MyCommand>`, which gets its dependencies through its constructor and the parsed flags and args in `run({ flags, args })`.

The base command parses the flags and args, boots the module into an application context, resolves the handler from it and runs it, and closes the context once the command ends, whether it failed or not. `SIGINT` and `SIGTERM` close it through NestJS shutdown hooks as well.

```ts
// print.ts
import { Command, Flags } from '@cenk1cenk2/oclif-common'

import { PrintHandler } from './print.handler.js'
import { PrintModule } from './print.module.js'

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
// print.module.ts
import { CliModule, JsonParser, TOKEN_COMMAND_FLAGS, YamlParser } from '@cenk1cenk2/oclif-common'
import { Module } from '@nestjs/common'

import { PrintHandler } from './print.handler.js'

@Module({
  imports: [
    CliModule.forRoot({ parser: { parsers: [JsonParser, YamlParser] } }),
    PrinterModule.forRootAsync({ inject: [TOKEN_COMMAND_FLAGS], useFactory: (flags) => ({ browser: flags.browser }) })
  ],
  providers: [PrintHandler]
})
export class PrintModule {}
```

```ts
// print.handler.ts
import type { CommandHandler, CommandInput } from '@cenk1cenk2/oclif-common'
import { LoggerService, TaskManager } from '@cenk1cenk2/oclif-common'
import { Injectable } from '@nestjs/common'

import type Print from './print.js'

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

oclif finds commands by globbing the commands directory, so exclude the module and handler files from it in your CLI's `package.json`:

```json
{
  "oclif": {
    "commands": {
      "strategy": "pattern",
      "target": "./dist/commands",
      "globPatterns": ["**/*.+(js|cjs|mjs|ts|tsx|mts|cts)", "!**/*.+(d.ts|test.ts|test.js|spec.ts|spec.js|d.mts|d.cts)?(x)", "!**/*.+(module|handler).*"]
    }
  }
}
```

Constructor injection reads the parameter types that TypeScript emits, so build with `experimentalDecorators` and `emitDecoratorMetadata`, and import injected services as values: an `import type`, or an interface as the parameter type, leaves nothing to resolve at runtime. Inject interfaces through a token with `@Inject(token)`.

A handler needs no oclif to be tested: compile it in a `Test.createTestingModule` of `@nestjs/testing` with its dependencies, and call `run` with the flags and args.

### Modules and services

`CliModule.forRoot({ logger, parser, logo })` configures the shared modules: `LoggerService`, `FileSystemService`, `ParserService`, `LogoService` and `TaskManager`, the listr2 task manager of the command, which renders plainly at debug level and stays silent for silent or JSON output. The global `CommandModule` provides the running command: parsed flags through `TOKEN_COMMAND_FLAGS`, arguments through `TOKEN_COMMAND_ARGS`, the oclif `Config` through `TOKEN_OCLIF_CONFIG` and the command class through `TOKEN_COMMAND`, for module factories and services alike. `ConfigService` holds the runtime config. `pipeProcessToLogger(logger, process)` and `pipeProcessThroughListr(task, process)` pipe a child process from any service.

The logger writes `FATAL` and `ERROR` to stderr and every other level to stdout. `CliModule.forRoot({ logger: { stderr } })` takes the list of levels to write to stderr instead, and the logo, printed at `INFO`, goes to stderr when that list holds `INFO`. A command that fails before its logger options are known writes every level to stderr.

## Migration

From commands that ran themselves:

- Move the body of `run()` into the `run({ flags, args })` of an `@Injectable()` handler, provide it in the module of the command and set `static handler`. A command no longer implements `run()`.
- Replace `@Inject()` properties with constructor parameters of the handler. `@Optional()` stays available on constructor parameters.
- Replace `this.logger` with an injected `LoggerService`, `this.tasks` with an injected `TaskManager`, and `this.flags` / `this.args` with the input of `run`, or `TOKEN_COMMAND_FLAGS` / `TOKEN_COMMAND_ARGS` in services. Tasks no longer run on their own after the command: call `await this.tasks.runAll()` in the handler.
- Replace `this.setCtxDefaults(...)` / `this.setCtxAssign(...)` with `setCtxDefaults(tasks.options.ctx, ...)` / `setCtxAssign(tasks.options.ctx, ...)`, and `this.pipeProcessToLogger(...)` / `this.pipeProcessThroughListr(...)` with `pipeProcessToLogger(logger, ...)` / `pipeProcessThroughListr(task, ...)`.
- `Command` takes no type parameters any more, type the handler with `CommandHandler<typeof MyCommand>` instead.
- Exclude `*.module.*` and `*.handler.*` from the oclif command discovery as shown above.

## Development

This package lives in the `oclif-tools` pnpm workspace. Build, lint and test run from the repository root:

```sh
pnpm install
pnpm lint
pnpm build
pnpm test
```

Releases are cut by `multi-semantic-release` from `main` and published through npm staged publishing - the `npm stage publish` step parks the version for maintainer approval with 2FA before it reaches the registry.
