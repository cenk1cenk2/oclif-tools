# Class: ConfigCommand<CommandChoices, LockFile, Ctx, Flags, Args, Store\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CommandChoices` | extends `string` = `string` |
| `LockFile` | `any` |
| `Ctx` | extends `ListrContext` = `ListrContext` |
| `Flags` | extends `Record`<`PropertyKey`, `any`\> = [`InferFlags`](../types/InferFlags.md)<typeof [`ConfigCommand`](ConfigCommand.md)\> |
| `Args` | extends `Record`<`PropertyKey`, `any`\> = [`InferArgs`](../types/InferArgs.md)<typeof [`ConfigCommand`](ConfigCommand.md)\> |
| `Store` | extends `Record`<`PropertyKey`, `any`\> = `Record`<`PropertyKey`, `any`\> |

## Hierarchy

- [`Command`](Command.md)<`Ctx`, `Flags`, `Args`, `Store`\>

  ↳ **`ConfigCommand`**

## Properties

### argv

• **argv**: `string`[]

#### Inherited from

[Command](Command.md).[argv](Command.md#argv)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:12

___

### config

• **config**: `Config`

#### Inherited from

[Command](Command.md).[config](Command.md#config)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:13

___

### id

▪ `Static` **id**: `string`

A command ID, used mostly in error or verbose reporting.

#### Inherited from

[Command](Command.md).[id](Command.md#id)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:16

___

### summary

▪ `Static` `Optional` **summary**: `string`

The tweet-sized description for your class, used in a parent-commands
sub-command listing and as the header for the command help.

#### Inherited from

[Command](Command.md).[summary](Command.md#summary)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:21

___

### description

▪ `Static` **description**: `string`

A full description of how to use the command.

If no summary, the first line of the description will be used as the summary.

#### Inherited from

[Command](Command.md).[description](Command.md#description)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:27

___

### hidden

▪ `Static` **hidden**: `boolean`

Hide the command from help

#### Inherited from

[Command](Command.md).[hidden](Command.md#hidden)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:29

___

### state

▪ `Static` `Optional` **state**: `string`

Mark the command as a given state (e.g. beta or deprecated) in help

#### Inherited from

[Command](Command.md).[state](Command.md#state)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:31

___

### deprecationOptions

▪ `Static` `Optional` **deprecationOptions**: `Deprecation`

#### Inherited from

[Command](Command.md).[deprecationOptions](Command.md#deprecationoptions)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:32

___

### deprecateAliases

▪ `Static` `Optional` **deprecateAliases**: `boolean`

Emit deprecation warning when a command alias is used

#### Inherited from

[Command](Command.md).[deprecateAliases](Command.md#deprecatealiases)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:36

___

### usage

▪ `Static` **usage**: `string` \| `string`[]

An override string (or strings) for the default usage documentation.

#### Inherited from

[Command](Command.md).[usage](Command.md#usage)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:40

___

### help

▪ `Static` **help**: `string`

#### Inherited from

[Command](Command.md).[help](Command.md#help)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:41

___

### aliases

▪ `Static` **aliases**: `string`[]

An array of aliases for this command.

#### Inherited from

[Command](Command.md).[aliases](Command.md#aliases)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:43

___

### strict

▪ `Static` **strict**: `boolean`

When set to false, allows a variable amount of arguments

#### Inherited from

[Command](Command.md).[strict](Command.md#strict)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:45

___

### args

▪ `Static` **args**: [`ArgInput`](../types/ArgInput.md)<{ `[arg: string]`: `any`;  }\>

An order-dependent object of arguments for the command

#### Inherited from

[Command](Command.md).[args](Command.md#args)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:47

___

### plugin

▪ `Static` **plugin**: `Plugin`

#### Inherited from

[Command](Command.md).[plugin](Command.md#plugin)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:48

___

### pluginName

▪ `Static` `Optional` `Readonly` **pluginName**: `string`

#### Inherited from

[Command](Command.md).[pluginName](Command.md#pluginname)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:49

___

### pluginType

▪ `Static` `Optional` `Readonly` **pluginType**: `string`

#### Inherited from

[Command](Command.md).[pluginType](Command.md#plugintype)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:50

___

### pluginAlias

▪ `Static` `Optional` `Readonly` **pluginAlias**: `string`

#### Inherited from

[Command](Command.md).[pluginAlias](Command.md#pluginalias)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:51

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

[Command](Command.md).[examples](Command.md#examples)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:66

___

### hasDynamicHelp

▪ `Static` **hasDynamicHelp**: `boolean`

#### Inherited from

[Command](Command.md).[hasDynamicHelp](Command.md#hasdynamichelp)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:67

___

### \_enableJsonFlag

▪ `Static` `Protected` **\_enableJsonFlag**: `boolean`

#### Inherited from

[Command](Command.md).[_enableJsonFlag](Command.md#_enablejsonflag)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:68

___

### \_baseFlags

▪ `Static` `Protected` **\_baseFlags**: [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Inherited from

[Command](Command.md).[_baseFlags](Command.md#_baseflags)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:80

___

### \_flags

▪ `Static` `Protected` **\_flags**: [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

A hash of flags for the command

#### Inherited from

[Command](Command.md).[_flags](Command.md#_flags)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:84

___

### id

• **id**: `string`

#### Inherited from

[Command](Command.md).[id](Command.md#id-1)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:87

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

[Command](Command.md).[debug](Command.md#debug)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:88

___

### context

• **context**: `string`

#### Inherited from

[Command](Command.md).[context](Command.md#context)

#### Defined in

packages/common/src/commands/base.command.ts:35

___

### logger

• **logger**: [`Logger`](Logger.md)

#### Inherited from

[Command](Command.md).[logger](Command.md#logger)

#### Defined in

packages/common/src/commands/base.command.ts:36

___

### tasks

• **tasks**: `Manager`<`Ctx`, ``"default"`` \| ``"verbose"`` \| ``"silent"`` \| ``"simple"``, ``"verbose"``\>

#### Inherited from

[Command](Command.md).[tasks](Command.md#tasks)

#### Defined in

packages/common/src/commands/base.command.ts:37

___

### validator

• **validator**: [`ValidatorService`](ValidatorService.md)

#### Inherited from

[Command](Command.md).[validator](Command.md#validator)

#### Defined in

packages/common/src/commands/base.command.ts:38

___

### cs

• **cs**: [`ConfigService`](ConfigService.md)

#### Inherited from

[Command](Command.md).[cs](Command.md#cs)

#### Defined in

packages/common/src/commands/base.command.ts:39

___

### parser

• **parser**: [`ParserService`](ParserService.md)

#### Inherited from

[Command](Command.md).[parser](Command.md#parser)

#### Defined in

packages/common/src/commands/base.command.ts:40

___

### fs

• **fs**: [`FileSystemService`](FileSystemService.md)

#### Inherited from

[Command](Command.md).[fs](Command.md#fs)

#### Defined in

packages/common/src/commands/base.command.ts:41

___

### store

• **store**: [`StoreService`](StoreService.md)<`Store`\>

#### Inherited from

[Command](Command.md).[store](Command.md#store)

#### Defined in

packages/common/src/commands/base.command.ts:42

___

### flags

• **flags**: `Flags`

#### Inherited from

[Command](Command.md).[flags](Command.md#flags-1)

#### Defined in

packages/common/src/commands/base.command.ts:44

___

### args

• **args**: `Args`

#### Inherited from

[Command](Command.md).[args](Command.md#args-1)

#### Defined in

packages/common/src/commands/base.command.ts:45

___

### choices

• **choices**: [`ConfigCommandChoices`](../types/ConfigCommandChoices.md)<`CommandChoices`\>

#### Defined in

packages/common/src/commands/config.command.ts:16

___

### locker

• **locker**: [`LockerService`](LockerService.md)<`LockFile`\>

#### Defined in

packages/common/src/commands/config.command.ts:17

## Accessors

### enableJsonFlag

• `Static` `get` **enableJsonFlag**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Command.enableJsonFlag

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:69

• `Static` `set` **enableJsonFlag**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Command.enableJsonFlag

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:70

___

### flags

• `Static` `get` **flags**(): [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Returns

[`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Inherited from

Command.flags

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:85

• `Static` `set` **flags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\> |

#### Returns

`void`

#### Inherited from

Command.flags

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:86

___

### ctor

• `Protected` `get` **ctor**(): typeof `Command`

#### Returns

typeof `Command`

#### Inherited from

Command.ctor

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:90

___

### baseFlags

• `Static` `get` **baseFlags**(): [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Returns

[`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\>

#### Inherited from

Command.baseFlags

#### Defined in

packages/common/src/commands/base.command.ts:24

• `Static` `set` **baseFlags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | [`FlagInput`](../types/FlagInput.md)<{ `[flag: string]`: `any`;  }\> |

#### Returns

`void`

#### Inherited from

Command.baseFlags

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

[Command](Command.md).[run](Command.md#run)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:79

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

[Command](Command.md).[warn](Command.md#warn)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:93

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

[Command](Command.md).[error](Command.md#error)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:94

▸ **error**(`input`, `options?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |
| `options?` | { `code?`: `string` ; `exit?`: `number`  } & `PrettyPrintableError` |

#### Returns

`never`

#### Inherited from

[Command](Command.md).[error](Command.md#error)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:98

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

[Command](Command.md).[log](Command.md#log)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:102

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

[Command](Command.md).[logToStderr](Command.md#logtostderr)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:103

___

### jsonEnabled

▸ **jsonEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Command](Command.md).[jsonEnabled](Command.md#jsonenabled)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:104

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

[Command](Command.md).[warnIfFlagDeprecated](Command.md#warnifflagdeprecated)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:110

___

### warnIfCommandDeprecated

▸ `Protected` **warnIfCommandDeprecated**(): `void`

#### Returns

`void`

#### Inherited from

[Command](Command.md).[warnIfCommandDeprecated](Command.md#warnifcommanddeprecated)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:111

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

[Command](Command.md).[parse](Command.md#parse)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:112

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

[Command](Command.md).[toSuccessJson](Command.md#tosuccessjson)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:115

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

[Command](Command.md).[toErrorJson](Command.md#toerrorjson)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:116

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

[Command](Command.md).[logJson](Command.md#logjson)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:117

___

### shouldRunBefore

▸ **shouldRunBefore**(): `void` \| `Promise`<`void`\>

Construct the class if you dont want to extend init or constructor.

#### Returns

`void` \| `Promise`<`void`\>

#### Inherited from

[Command](Command.md).[shouldRunBefore](Command.md#shouldrunbefore)

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

#### Inherited from

[Command](Command.md).[shouldRunAfter](Command.md#shouldrunafter)

#### Defined in

packages/common/src/commands/base.command.ts:57

___

### \_run

▸ **_run**<`T`\>(): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

#### Inherited from

[Command](Command.md).[_run](Command.md#_run)

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

#### Inherited from

[Command](Command.md).[exit](Command.md#exit)

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

#### Inherited from

[Command](Command.md).[runTasks](Command.md#runtasks)

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

#### Inherited from

[Command](Command.md).[prompt](Command.md#prompt)

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

#### Inherited from

[Command](Command.md).[setCtxDefaults](Command.md#setctxdefaults)

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

#### Inherited from

[Command](Command.md).[setCtxAssign](Command.md#setctxassign)

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

#### Inherited from

[Command](Command.md).[pipeProcessToLogger](Command.md#pipeprocesstologger)

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

#### Inherited from

[Command](Command.md).[pipeProcessThroughListr](Command.md#pipeprocessthroughlistr)

#### Defined in

packages/common/src/commands/base.command.ts:120

___

### init

▸ `Protected` **init**(): `Promise`<`void`\>

Initial functions / constructor

#### Returns

`Promise`<`void`\>

#### Inherited from

[Command](Command.md).[init](Command.md#init)

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

#### Inherited from

[Command](Command.md).[finally](Command.md#finally)

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

#### Inherited from

[Command](Command.md).[catch](Command.md#catch)

#### Defined in

packages/common/src/commands/base.command.ts:222

___

### run

▸ **run**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Overrides

[Command](Command.md).[run](Command.md#run-1)

#### Defined in

packages/common/src/commands/config.command.ts:19

___

### setup

▸ **setup**(): [`ConfigCommandSetup`](../interfaces/ConfigCommandSetup.md)<`CommandChoices`, `LockFile`\> \| `Promise`<[`ConfigCommandSetup`](../interfaces/ConfigCommandSetup.md)<`CommandChoices`, `LockFile`\>\>

#### Returns

[`ConfigCommandSetup`](../interfaces/ConfigCommandSetup.md)<`CommandChoices`, `LockFile`\> \| `Promise`<[`ConfigCommandSetup`](../interfaces/ConfigCommandSetup.md)<`CommandChoices`, `LockFile`\>\>

#### Defined in

packages/common/src/commands/config.command.ts:35

___

### table

▸ `Protected` **table**(`...options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...options` | [data: Record<string, unknown\>[], columns: Columns<Record<string, unknown\>\>, options?: Options] |

#### Returns

`void`

#### Defined in

packages/common/src/commands/config.command.ts:39

___

### select

▸ `Protected` **select**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

packages/common/src/commands/config.command.ts:43

## Constructors

### constructor

• **new ConfigCommand**<`CommandChoices`, `LockFile`, `Ctx`, `Flags`, `Args`, `Store`\>(`argv`, `config`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CommandChoices` | extends `string` = `string` |
| `LockFile` | `any` |
| `Ctx` | extends `unknown` = `any` |
| `Flags` | extends `Record`<`PropertyKey`, `any`\> = { `[flag: string]`: `any`;  } & { `json`: `boolean`  } |
| `Args` | extends `Record`<`PropertyKey`, `any`\> = [`InferArgs`](../types/InferArgs.md)<typeof [`ConfigCommand`](ConfigCommand.md)\> |
| `Store` | extends `Record`<`PropertyKey`, `any`\> = `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `string`[] |
| `config` | `Config` |

#### Inherited from

[Command](Command.md).[constructor](Command.md#constructor)

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:89
