# Class: Command<Ctx, Flags, Args, Store\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Ctx` | extends `ListrContext` = `ListrContext` |
| `Flags` | extends `Record`<`PropertyKey`, `any`\> = [`InferFlags`](../types/InferFlags.md)<typeof [`Command`](Command.md)\> |
| `Args` | extends `Record`<`PropertyKey`, `any`\> = [`InferArgs`](../types/InferArgs.md)<typeof [`Command`](Command.md)\> |
| `Store` | extends `Record`<`PropertyKey`, `any`\> = `Record`<`PropertyKey`, `any`\> |

## Hierarchy

- `Command`

  ↳ **`Command`**

  ↳↳ [`ConfigCommand`](ConfigCommand.md)

## Properties

### argv

• **argv**: `string`[]

#### Inherited from

BaseCommand.argv

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:12

___

### config

• **config**: `Config`

#### Inherited from

BaseCommand.config

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:13

___

### id

▪ `Static` **id**: `string`

A command ID, used mostly in error or verbose reporting.

#### Inherited from

BaseCommand.id

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:16

___

### summary

▪ `Static` `Optional` **summary**: `string`

The tweet-sized description for your class, used in a parent-commands
sub-command listing and as the header for the command help.

#### Inherited from

BaseCommand.summary

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:21

___

### description

▪ `Static` **description**: `string`

A full description of how to use the command.

If no summary, the first line of the description will be used as the summary.

#### Inherited from

BaseCommand.description

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:27

___

### hidden

▪ `Static` **hidden**: `boolean`

Hide the command from help

#### Inherited from

BaseCommand.hidden

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:29

___

### state

▪ `Static` `Optional` **state**: `string`

Mark the command as a given state (e.g. beta or deprecated) in help

#### Inherited from

BaseCommand.state

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:31

___

### deprecationOptions

▪ `Static` `Optional` **deprecationOptions**: `Deprecation`

#### Inherited from

BaseCommand.deprecationOptions

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:32

___

### deprecateAliases

▪ `Static` `Optional` **deprecateAliases**: `boolean`

Emit deprecation warning when a command alias is used

#### Inherited from

BaseCommand.deprecateAliases

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:36

___

### usage

▪ `Static` **usage**: `string` \| `string`[]

An override string (or strings) for the default usage documentation.

#### Inherited from

BaseCommand.usage

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:40

___

### help

▪ `Static` **help**: `string`

#### Inherited from

BaseCommand.help

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:41

___

### aliases

▪ `Static` **aliases**: `string`[]

An array of aliases for this command.

#### Inherited from

BaseCommand.aliases

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:43

___

### strict

▪ `Static` **strict**: `boolean`

When set to false, allows a variable amount of arguments

#### Inherited from

BaseCommand.strict

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:45

___

### args

▪ `Static` **args**: [`ArgInput`](../types/ArgInput.md)<{ `[arg: string]`: `any`;  }\>

An order-dependent object of arguments for the command

#### Inherited from

BaseCommand.args

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:47

___

### plugin

▪ `Static` **plugin**: `Plugin`

#### Inherited from

BaseCommand.plugin

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:48

___

### pluginName

▪ `Static` `Optional` `Readonly` **pluginName**: `string`

#### Inherited from

BaseCommand.pluginName

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:49

___

### pluginType

▪ `Static` `Optional` `Readonly` **pluginType**: `string`

#### Inherited from

BaseCommand.pluginType

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:50

___

### pluginAlias

▪ `Static` `Optional` `Readonly` **pluginAlias**: `string`

#### Inherited from

BaseCommand.pluginAlias

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:51

___

### examples

▪ `Static` **examples**: `Example`[]

An array of examples to show at the end of the command's help.

IF only a string is provided, it will try to look for a line that starts
with the cmd.bin as the example command and the rest as the description.
If found, the command will be formatted appropriately.

```
EXAMPLES:
  A description of a particular use case.

    $ <%= config.bin => command flags
```

#### Inherited from

BaseCommand.examples

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:66

___

### hasDynamicHelp

▪ `Static` **hasDynamicHelp**: `boolean`

#### Inherited from

BaseCommand.hasDynamicHelp

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:67

___

### \_enableJsonFlag

▪ `Static` `Protected` **\_enableJsonFlag**: `boolean`

#### Inherited from

BaseCommand.\_enableJsonFlag

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:68

___

### \_baseFlags

▪ `Static` `Protected` **\_baseFlags**: [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Inherited from

BaseCommand.\_baseFlags

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:80

___

### \_flags

▪ `Static` `Protected` **\_flags**: [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

A hash of flags for the command

#### Inherited from

BaseCommand.\_flags

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:84

___

### id

• **id**: `string`

#### Inherited from

BaseCommand.id

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:87

___

### debug

• `Protected` **debug**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Inherited from

BaseCommand.debug

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:88

___

### context

• **context**: `string`

#### Defined in

packages/common/src/commands/base.command.ts:35

___

### logger

• **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/commands/base.command.ts:36

___

### tasks

• **tasks**: `Manager`<`Ctx`, ``"default"`` \| ``"verbose"`` \| ``"silent"`` \| ``"simple"``, ``"verbose"``\>

#### Defined in

packages/common/src/commands/base.command.ts:37

___

### validator

• **validator**: [`ValidatorService`](ValidatorService.md)

#### Defined in

packages/common/src/commands/base.command.ts:38

___

### cs

• **cs**: [`ConfigService`](ConfigService.md)

#### Defined in

packages/common/src/commands/base.command.ts:39

___

### parser

• **parser**: [`ParserService`](ParserService.md)

#### Defined in

packages/common/src/commands/base.command.ts:40

___

### fs

• **fs**: [`FileSystemService`](FileSystemService.md)

#### Defined in

packages/common/src/commands/base.command.ts:41

___

### store

• **store**: [`StoreService`](StoreService.md)<`Store`\>

#### Defined in

packages/common/src/commands/base.command.ts:42

___

### flags

• **flags**: `Flags`

#### Defined in

packages/common/src/commands/base.command.ts:44

___

### args

• **args**: `Args`

#### Defined in

packages/common/src/commands/base.command.ts:45

## Accessors

### enableJsonFlag

• `Static` `get` **enableJsonFlag**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseCommand.enableJsonFlag

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:69

• `Static` `set` **enableJsonFlag**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

BaseCommand.enableJsonFlag

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:70

___

### flags

• `Static` `get` **flags**(): [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Returns

[`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Inherited from

BaseCommand.flags

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:85

• `Static` `set` **flags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\> |

#### Returns

`void`

#### Inherited from

BaseCommand.flags

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:86

___

### ctor

• `Protected` `get` **ctor**(): typeof `Command`

#### Returns

typeof `Command`

#### Inherited from

BaseCommand.ctor

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:90

___

### baseFlags

• `Static` `get` **baseFlags**(): [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Returns

[`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Overrides

BaseCommand.baseFlags

#### Defined in

packages/common/src/commands/base.command.ts:24

• `Static` `set` **baseFlags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\> |

#### Returns

`void`

#### Overrides

BaseCommand.baseFlags

#### Defined in

packages/common/src/commands/base.command.ts:29

## Methods

### run

▸ `Static` **run**<`T`\>(`this`, `argv?`, `opts?`): `Promise`<`ReturnType`<`T`[``"run"``]\>\>

instantiate and run the command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Command`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | (`argv`: `string`[], `config`: `Config`) => `T` | the command class |
| `argv?` | `string`[] | argv |
| `opts?` | `LoadOptions` | options |

#### Returns

`Promise`<`ReturnType`<`T`[``"run"``]\>\>

result

#### Inherited from

BaseCommand.run

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:79

___

### warn

▸ **warn**(`input`): `string` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |

#### Returns

`string` \| `Error`

#### Inherited from

BaseCommand.warn

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:93

___

### error

▸ **error**(`input`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |
| `options` | { `code?`: `string` ; `exit`: ``false``  } & `PrettyPrintableError` |

#### Returns

`void`

#### Inherited from

BaseCommand.error

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:94

▸ **error**(`input`, `options?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |
| `options?` | { `code?`: `string` ; `exit?`: `number`  } & `PrettyPrintableError` |

#### Returns

`never`

#### Inherited from

BaseCommand.error

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:98

___

### log

▸ **log**(`message?`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

BaseCommand.log

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:102

___

### logToStderr

▸ **logToStderr**(`message?`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

BaseCommand.logToStderr

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:103

___

### jsonEnabled

▸ **jsonEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseCommand.jsonEnabled

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:104

___

### warnIfFlagDeprecated

▸ `Protected` **warnIfFlagDeprecated**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Inherited from

BaseCommand.warnIfFlagDeprecated

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:110

___

### warnIfCommandDeprecated

▸ `Protected` **warnIfCommandDeprecated**(): `void`

#### Returns

`void`

#### Inherited from

BaseCommand.warnIfCommandDeprecated

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:111

___

### parse

▸ `Protected` **parse**<`F`, `B`, `A`\>(`options?`, `argv?`): `Promise`<`ParserOutput`<`F`, `B`, `A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `FlagOutput` |
| `B` | extends `FlagOutput` |
| `A` | extends `ArgOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Input`<`F`, `B`, `A`\> |
| `argv?` | `string`[] |

#### Returns

`Promise`<`ParserOutput`<`F`, `B`, `A`\>\>

#### Inherited from

BaseCommand.parse

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:112

___

### toSuccessJson

▸ `Protected` **toSuccessJson**(`result`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `unknown` |

#### Returns

`any`

#### Inherited from

BaseCommand.toSuccessJson

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:115

___

### toErrorJson

▸ `Protected` **toErrorJson**(`err`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |

#### Returns

`any`

#### Inherited from

BaseCommand.toErrorJson

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:116

___

### logJson

▸ `Protected` **logJson**(`json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `unknown` |

#### Returns

`void`

#### Inherited from

BaseCommand.logJson

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:117

___

### shouldRunBefore

▸ **shouldRunBefore**(): `void` \| `Promise`<`void`\>

Construct the class if you dont want to extend init or constructor.

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

packages/common/src/commands/base.command.ts:51

___

### shouldRunAfter

▸ **shouldRunAfter**(`_ctx?`): `void` \| `Promise`<`void`\>

Deconstruct the class if you dont want to extend finally or catch.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_ctx?` | `Ctx` |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

packages/common/src/commands/base.command.ts:57

___

### run

▸ **run**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Overrides

BaseCommand.run

#### Defined in

packages/common/src/commands/base.command.ts:60

___

### \_run

▸ **_run**<`T`\>(): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

#### Overrides

BaseCommand.\_run

#### Defined in

packages/common/src/commands/base.command.ts:65

___

### exit

▸ **exit**(`code?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`void`

#### Overrides

BaseCommand.exit

#### Defined in

packages/common/src/commands/base.command.ts:85

___

### runTasks

▸ **runTasks**<`C`\>(): `Promise`<`C`\>

Run all tasks from task manager.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `unknown` = `Ctx` |

#### Returns

`Promise`<`C`\>

#### Defined in

packages/common/src/commands/base.command.ts:92

___

### prompt

▸ **prompt**<`T`\>(`options`): `Promise`<`T`\>

Gets prompt from user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `PromptOptions`<``false``\> |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/commands/base.command.ts:97

___

### setCtxDefaults

▸ `Protected` **setCtxDefaults**<`T`\>(`...defaults`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `Ctx` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...defaults` | `Partial`<`T`\>[] |

#### Returns

`void`

#### Defined in

packages/common/src/commands/base.command.ts:104

___

### setCtxAssign

▸ `Protected` **setCtxAssign**<`K`\>(`...assigns`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...assigns` | [`SetCtxAssignOptions`](../interfaces/SetCtxAssignOptions.md)<`K`\>[] |

#### Returns

`void`

#### Defined in

packages/common/src/commands/base.command.ts:110

___

### pipeProcessToLogger

▸ `Protected` **pipeProcessToLogger**(`instance`, `options?`): `ExecaChildProcess`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `ExecaChildProcess`<`string`\> |
| `options?` | [`PipeProcessToLoggerOptions`](../interfaces/PipeProcessToLoggerOptions.md) |

#### Returns

`ExecaChildProcess`<`string`\>

#### Defined in

packages/common/src/commands/base.command.ts:116

___

### pipeProcessThroughListr

▸ `Protected` **pipeProcessThroughListr**(`task`, `instance`): `ExecaChildProcess`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `TaskWrapper`<`any`, `any`\> |
| `instance` | `ExecaChildProcess`<`string`\> |

#### Returns

`ExecaChildProcess`<`string`\>

#### Defined in

packages/common/src/commands/base.command.ts:120

___

### init

▸ `Protected` **init**(): `Promise`<`void`\>

Initial functions / constructor

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.init

#### Defined in

packages/common/src/commands/base.command.ts:126

___

### finally

▸ `Protected` **finally**<`C`\>(): `Promise`<{ `ctx`: `C`  }\>

Tasks to run before end of the command.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `unknown` = `Ctx` |

#### Returns

`Promise`<{ `ctx`: `C`  }\>

#### Overrides

BaseCommand.finally

#### Defined in

packages/common/src/commands/base.command.ts:206

___

### catch

▸ `Protected` **catch**(`e`, `exit?`): `Promise`<`void`\>

Catch any error occurred during command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |
| `exit?` | `number` |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.catch

#### Defined in

packages/common/src/commands/base.command.ts:222

___

### greet

▸ `Private` **greet**(): `void`

#### Returns

`void`

#### Defined in

packages/common/src/commands/base.command.ts:243

## Constructors

### constructor

• **new Command**<`Ctx`, `Flags`, `Args`, `Store`\>(`argv`, `config`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ctx` | extends `unknown` = `any` |
| `Flags` | extends `Record`<`PropertyKey`, `any`\> = { `[flag: string]`: `any`;  } & { `json`: `boolean`  } |
| `Args` | extends `Record`<`PropertyKey`, `any`\> = [`InferArgs`](../types/InferArgs.md)<typeof [`Command`](Command.md)\> |
| `Store` | extends `Record`<`PropertyKey`, `any`\> = `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `string`[] |
| `config` | `Config` |

#### Inherited from

BaseCommand.constructor

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:89
