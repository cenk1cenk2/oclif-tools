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

The package is also an oclif plugin that registers a `command_not_found` hook, which reports the unknown command and prints the help. Enable it by listing the package in the plugins of your CLI's `package.json`; oclif loads a plugin only when it is a dependency of the CLI as well:

```json
{
  "dependencies": {
    "@cenk1cenk2/oclif-common": "^8.0.0"
  },
  "oclif": {
    "plugins": ["@cenk1cenk2/oclif-common"]
  }
}
```

### Commands

A command is an oclif command, a NestJS module and an injectable handler:

```
src/commands/build.ts                 # the oclif command: description, flags and args, with @UseHandler
src/modules/build/build.module.ts     # the root module of the command, which provides the handler
src/modules/build/build.handler.ts    # the @Injectable() handler that runs the command
src/modules/shared/shared.module.ts   # optional, the modules every command imports
```

A single-command CLI keeps its command in `src/commands/index.ts` and names its module directory after the CLI. Modules and handlers stay out of `src/commands`: oclif discovers commands by globbing every file in that directory and turns each file name into a command id, so a module or a handler there would show up as a broken command.

- The command extends `Command` and declares the oclif side as statics, which oclif reads: its description, `static flags` and `static args`. `@UseHandler({ module, handler })` registers its root module and its handler. The decorator only accepts a handler that takes the flags and args of the command it decorates, so a handler written for another command is a type error.
- The module imports the optional modules the command needs and provides the handler.
- The handler implements `CommandHandler<typeof MyCommand>`, gets its dependencies through its constructor and the parsed flags and args in `run({ flags, args })`.

The base command parses the flags and args, boots the module into an application context, resolves the handler from it and runs it, and closes the context once the command ends, whether it failed or not.

The first `SIGINT` or `SIGTERM` does not tear the context down under a running handler: it aborts the `signal` of the handler input and logs a warning, the handler finishes or stops early by watching that signal, for example by passing it to child processes, then the context closes and the command exits with the code of the signal, `130` for `SIGINT` and `143` for `SIGTERM`. A second signal exits at once. `TaskManager` leaves signals to the command, so a running listr task is not cut off either.

```ts
// src/commands/print.ts
import { Command, Flags, UseHandler } from '@cenk1cenk2/oclif-common'

import { PrintHandler } from '../modules/print/print.handler.js'
import { PrintModule } from '../modules/print/print.module.js'

@UseHandler({ module: PrintModule, handler: PrintHandler })
export default class Print extends Command {
  static description = 'Print a document.'

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
  imports: [LoggerModule.forRoot({ stderr: Object.values(LogLevels) }), LogoModule.forRoot(), TaskModule.forRoot()],
  exports: [TaskModule]
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

### Validation

oclif parses the flags and args. A schema in `@UseHandler({ module, handler, schema })`, any [Standard Schema](https://standardschema.dev) such as zod, valibot or arktype, then validates the parsed `{ flags, args }` as a whole before the command boots, so it can check rules across flags and coerce or transform values. Its output replaces the input: `TOKEN_COMMAND_FLAGS`, `TOKEN_COMMAND_ARGS` and the handler see only checked values, while the log level and JSON flags are read from what oclif parsed. A rejected input fails like a flag oclif can not parse, once and with exit code 2. The handler takes `CommandSchemaInput<typeof schema>`, and the decorator rejects a handler that does not take the output of the schema, or a schema that reads a flag or arg the command does not declare.

```ts
// src/modules/deploy/deploy.schema.ts
export const deploySchema = z.object({
  flags: z
    .object({
      target: z.enum(['staging', 'production']).describe('Where to deploy.'),
      force: z.boolean().default(false),
      tag: z.string().optional()
    })
    .refine((flags) => flags.target !== 'production' || flags.force || flags.tag, { message: 'production needs --force or --tag' }),
  args: z.object({})
})

// src/commands/deploy.ts
@UseHandler({ module: DeployModule, handler: DeployHandler, schema: deploySchema })
export default class Deploy extends Command {
  static flags = {
    target: Flags.string({ char: 't' }),
    force: Flags.boolean(),
    tag: Flags.string()
  }
}

// src/modules/deploy/deploy.handler.ts
@Injectable()
export class DeployHandler {
  public async run({ flags }: CommandSchemaInput<typeof deploySchema>): Promise<void> {}
}
```

The oclif options of a flag describe how to read argv, while the schema holds the rules for its value. When the schema also converts to JSON Schema through [Standard JSON Schema](https://standardschema.dev), as zod 4 does, `@UseHandler` reads its input JSON Schema and describes the flags and args from it for `--help`, the manifest and shell completion: `required`, `options` from a string `enum`, `default` and `description`, wherever a flag or arg does not declare its own. The command still parses with the flags and args as declared, so oclif shows these rules without enforcing them, a rejected value fails once with the message of the schema, and a default applies once, from the schema. A schema that only validates leaves the flags and args as they are.

| oclif option | In the schema | In `--help` and completion |
| --- | --- | --- |
| `required` | yes | derived from the `required` of the JSON Schema |
| `options` (enum) | yes (`z.enum`) | derived from a string `enum` |
| `default` | yes (`.default()`) | derived from `default` |
| `description` | yes (`.describe()`) | derived when the flag has none |
| `dependsOn`, `exclusive`, `exactlyOne`, `relationships` | yes (`refine`) | not shown |
| `min` / `max` | yes | not shown |
| integer and number parsing | coerce in the schema, though oclif still needs a flag that takes a value | the help type label comes from the flag |
| `char`, `env`, `multiple`, `allowNo`, `helpGroup`, `hidden` | no, they read argv and shape the help | declared on the flag |

`validate(schema, input)` and `validateSync(schema, input)` validate anything else without an application, returning the output of the schema and throwing a `ValidationError` with the `issues`. In services, `ValidatorModule.forRoot()` provides `ValidatorService` with the same two methods, which log every issue by its path before they throw.

### Modules and services

Every command boots with the runtime modules only:

- `ConfigModule` with `ConfigService`, the runtime config of the command: its log level and whether it answers in JSON.
- `CommandModule` with the running command: parsed flags through `TOKEN_COMMAND_FLAGS`, arguments through `TOKEN_COMMAND_ARGS`, the oclif `Config` through `TOKEN_OCLIF_CONFIG` and the command class through `TOKEN_COMMAND`, for module factories and services alike.
- `LoggerModule` with `LoggerService`. It writes `FATAL` and `ERROR` to stderr and every other level to stdout; import `LoggerModule.forRoot({ stderr })` or `LoggerModule.forRootAsync(...)` anywhere in the module of the command, such as a shared module, to list the levels written to stderr instead. It only provides the options to the logger of the runtime, so configure it in one module and share that module. A command whose module fails to boot, or whose flags fail to parse, writes every level to stderr.

Everything else is imported by the module of the command, each module with its own options. These modules are visible only to the module that imports them: a shared module re-exports them with `exports`, or `isGlobal: true` in the options of `forRoot` registers one globally. Each of them has a `forRootAsync` as well.

| Module | Provides |
| --- | --- |
| `TaskModule.forRoot(options?)` | `TaskManager`, the listr2 task manager, which renders plainly at debug level and stays silent for silent or JSON output; `options` override the defaults. |
| `ParserModule.forRoot({ parsers, json?, yaml? })` | `ParserService`, which reads, writes, parses and stringifies files by their extension with the given parsers, `[JsonParser]` by default. `json` takes the `reviver`, `replacer` and `space` (2 by default) of `JSON.parse` and `JSON.stringify`, and `yaml` the `parse` and `stringify` options of the `yaml` package. |
| `FilesystemModule.forRoot()` | `FileSystemService`. |
| `LogoModule.forRoot({ generator })` | `LogoService`, which prints the logo when the command starts, at `INFO`, so it follows the stderr levels of the logger. |
| `ValidatorModule.forRoot()` | `ValidatorService`, an injectable wrapper over `validate` and `validateSync` that logs every issue before it throws. |
| `RcModule.forRoot({ name, defaults?, schema?, merge?, cosmiconfig? })` | The configuration of the CLI, the rc file of the user merged over the bundled defaults, as `TOKEN_RC`, and `RcService` with the `filepath` of the rc file. |

`RcModule` looks for `.namerc` (YAML or JSON), `.namerc.{json,yaml,yml,js,ts,cjs,mjs}`, the same under `.config/`, `name.config.{js,ts,cjs,mjs}` and the `name` key of a `package.json`, from the working directory up to the home directory and then in the global config directory of the user. `defaults` is the base configuration the CLI ships: a file relative to the root of the CLI, read with the same loaders, or an object. The rc file is merged over it deeply: objects merge key by key, while arrays and every other value of the rc file replace those of the defaults; `merge: (defaults, rc) => config` replaces that merge, for example with the `mergeWith` of `es-toolkit`. `cosmiconfig` takes the options of cosmiconfig over ours, such as `searchStrategy`, `stopDir`, `searchPlaces` or `loaders`, the loaders merged with the YAML ones. Without an rc file the configuration is the defaults alone, or `{}`. The merged configuration is validated with `schema`, a Standard Schema, when given. It does not touch the flags, so the handler decides the precedence, for example flags over the rc file over the defaults:

```ts
@Injectable()
export class BuildHandler implements CommandHandler<typeof Build> {
  constructor(@Inject(TOKEN_RC) private readonly rc: Partial<BuildOptions>) {}

  public async run({ flags }: CommandInput<typeof Build>): Promise<void> {
    const options = { ...DEFAULTS, ...this.rc, ...Object.fromEntries(Object.entries(flags).filter(([, value]) => value !== undefined)) }
  }
}
```

Nest reports its bootstrap, the resolution of its dependencies and the errors its exception handler catches only when the `NEST_LOGS` environment variable is `1` or `true`. They go through the command logger then, in its format and filtered by `--log-level` like every other line: on stderr while the application boots, then with the stderr levels of the command. `NEST_DEBUG`, which Nest reads for the debug output of its injector, stays separate.

`pipeProcessToLogger(logger, process)` and `pipeProcessThroughListr(task, process)` pipe a child process from any service.

## Migration

Everything this major changes for a CLI built on the previous one.

### Runtime and dependencies

- Node.js 24 or newer is required.
- The peer dependencies start at `@oclif/core` 5, `listr2` 11, `@listr2/manager` 4, `@nestjs/common` and `@nestjs/core` 12, and `yaml` 2, which is no longer optional.
- The `enquirer`, `source-map-support`, `class-validator`, `class-transformer`, `fs-extra` and `update-notifier` peers are gone.
- `setup()` and its `--inspect` / `--source-map` handling are removed: drop the call from your `bin/run`, and use `node --inspect` and `--enable-source-maps`, directly or through `NODE_OPTIONS`.
- `winston` is gone: `WinstonService` and the `Winston` type are removed, resolve `LoggerService` from the application instead of constructing it or reaching into `WinstonService.instance`.
- `Inject` and `DynamicModule` are no longer re-exported, import them from `@nestjs/common`; `ClassType` is replaced by the `Type` of Nest.
- `DeepPartial` is removed, use the `PartialDeep` of [`type-fest`](https://github.com/sindresorhus/type-fest).

### Commands

- Move each command to `src/commands/<command>.ts`, and its module and handler to `src/modules/<command>/`. Move the body of `run()` into the `run({ flags, args, signal })` of an `@Injectable()` handler implementing `CommandHandler<typeof MyCommand>`, provide it in the module and register both on the command with `@UseHandler({ module, handler })`; a command without it fails to start. A command no longer implements `run()`, has no default module, and `Command` takes no type parameters.
- `register`, `shouldRunBefore`, `shouldRunAfter`, their hook types and the `isHookedWith*` guards are removed; move setup and teardown into provider lifecycle hooks.
- Replace `@Inject()` properties with constructor parameters of the handler. `@Optional()` stays available on constructor parameters.
- Replace `this.logger` with an injected `LoggerService`, `this.tasks` with an injected `TaskManager` from `TaskModule`, and `this.flags` / `this.args` with the input of `run`, or `TOKEN_COMMAND_FLAGS` / `TOKEN_COMMAND_ARGS` in module factories and services. Tasks no longer run on their own after the command: call `await tasks.runAll()` in the handler.
- Replace `this.pipeProcessToLogger(...)` / `this.pipeProcessThroughListr(...)` with `pipeProcessToLogger(logger, ...)` / `pipeProcessThroughListr(task, ...)`. `this.setCtxDefaults` / `this.setCtxAssign` are removed without a replacement helper; set the context of the `TaskManager` directly.
- The flags are typed from the base flags of the command: a flag the command does not declare is a type error, `json` and `ci` are `boolean` and `log-level` is `LogLevels`.
- `SIGINT` and `SIGTERM` no longer close the application under a running handler: the first one aborts the `signal` of the handler input, the application closes once the handler returns, and the command exits with `130` or `143`.
- A failed command prints its error once, through its logger; oclif no longer prints it a second time.

### Modules

- `CliModule` is renamed to `CliFactory`, with `CliFactory.create(module, options)` and `CliFactory.createFallback(options)`; `CliModule.forRoot`, `forMinimum` and `forFallback` are gone, and `CliModuleOptions` no longer exists.
- Only `ConfigModule`, `CommandModule` and `LoggerModule` are provided by default. Import the rest where the command uses it: `TaskModule.forRoot()`, `ParserModule.forRoot({ parsers })`, `FilesystemModule.forRoot()`, `LogoModule.forRoot({ generator })` and `ValidatorModule.forRoot()`. None of them is global unless registered with `isGlobal: true`, so a shared module exports the ones other modules use, and `ParserModule` no longer makes `FileSystemService` available.
- Parsers default to `[JsonParser]`; `ParserService.register` and `inject` are removed. `TOKEN_LOGO_GENERATOR` is replaced by `LogoModule.forRoot({ generator })`, and a command without `LogoModule` prints no logo.
- `TOKEN_COMMAND_FLAGS` and `TOKEN_COMMAND_ARGS` come from `CommandModule`, which also provides the oclif config as `TOKEN_OCLIF_CONFIG` and the command class as `TOKEN_COMMAND`. `ConfigModuleOptions` holds only `config`.
- `ConfigService` keeps only the runtime config. Replace its `oclif`, `command`, `root` and `defaults` with `@Inject(TOKEN_OCLIF_CONFIG)`, `@Inject(TOKEN_COMMAND)` and the `root` of the oclif config; `FileConstants` is removed. Replace its `read` / `write` with `ParserService.read` / `write` from `ParserModule`, and its `extend` / `merge` over bundled defaults with `RcModule.forRoot({ name, defaults })`. Its `env` and the environment variable definitions with `__name`, `__format` and `__element` are removed, together with `ConfigEnvKeys`, `ConfigIterator` and `clonePath`.

### Logger

- `LoggerModule.forRoot({ stderr })` takes the list of levels written to stderr instead of a boolean, by default `[LogLevels.FATAL, LogLevels.ERROR]`; replace `{ stderr: true }` with `{ stderr: Object.values(LogLevels) }`. The logo follows `INFO`.
- `LoggerModule.forRoot` and `forRootAsync` only provide the options of the logger of the runtime: import them once in the graph of the command module, sharing the module that imports them. A command that fails before its module boots writes every level to stderr.
- The own logs of Nest, such as its bootstrap and its exception handler, are off whatever the log level; set `NEST_LOGS=1` to see them. `--log-level trace` no longer turns them on or sets `NEST_DEBUG`.

### Hooks

- The not-found hook is registered by the package as an oclif plugin, and `notFoundHook` is no longer exported. Remove the `command_not_found` entry and its file from your CLI, and add `@cenk1cenk2/oclif-common` to `oclif.plugins`; oclif only loads plugins the CLI also lists in its `dependencies`.
- The update-notifier hook and `updateNotifierHook` are removed. Use [`@oclif/plugin-warn-if-update-available`](https://github.com/oclif/plugin-warn-if-update-available) in `oclif.plugins` instead.

### Utilities and services

- The locker is removed: `LockerModule`, `LockerService` (including `op`) and their types `LockerServiceOptions`, `LockerModuleAsyncOptions`, `LockData`, `UnlockData`, `CommonLockerData` and `LockableData` are gone. Read and write the file with `ParserService.read` / `write`, merge with `es-toolkit`, and check or remove files with `FileSystemService`.
- `ValidatorService` validates with any [Standard Schema](https://standardschema.dev) instead of class-validator classes: `validate(schema, input)` and `validateSync(schema, input)` take a `StandardSchemaV1`, return its output and throw `ValidationError` with its `issues`; `validateSync` throws a `TypeError` for schemas that validate asynchronously. `ValidatorModule` takes no options, and `TOKEN_VALIDATOR_SERVICE_OPTIONS` and `ValidatorServiceOptions` are removed.
- `FileSystemService.extra` and the exported `fs` type are removed: use `node:fs` or `fs/promises` for anything outside the service, whose `stats`, `write` and `remove` take the `Stats`, `WriteFileOptions` and `RmOptions` of Node.js. File operations no longer go through graceful-fs.
- `uniqueArrayFilter` is removed, use the `uniq` of es-toolkit.
- `merge` and `MergeStrategy` are removed, merge with the `mergeWith` of [`es-toolkit`](https://es-toolkit.dev), which writes into its first argument, so pass a copy: `MergeStrategy.OVERWRITE` is `mergeWith(cloneDeep(target), source, (_, value) => (Array.isArray(value) ? value : undefined))`, and `MergeStrategy.EXTEND` is `mergeWith(cloneDeep(target), source, (current, value) => (Array.isArray(current) && Array.isArray(value) ? uniq([...current, ...value]) : undefined))`.

## Development

The repository is the package. `pnpm lint` typechecks the sources and the tests before linting them, and `pnpm test` builds the package and the fixture cli under `test/fixtures/cli` before running the tests:

```sh
pnpm install
pnpm lint
pnpm build
pnpm test
```

Releases are cut by `semantic-release` from `main`, tagged as `@cenk1cenk2/oclif-common@<version>` like the releases from the former workspace, and published through npm staged publishing - the `npm stage publish` step parks the version for maintainer approval with 2FA before it reaches the registry.
