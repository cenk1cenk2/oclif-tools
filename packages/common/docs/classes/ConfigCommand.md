# Class: ConfigCommand<CommandChoices, Ctx, Config\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CommandChoices` | extends `string` |
| `Ctx` | extends `ListrContext` = `ListrContext` |
| `Config` | extends [`BaseConfig`](BaseConfig.md) = [`BaseConfig`](BaseConfig.md) |

## Hierarchy

- [`Command`](Command.md)<`Ctx`, `Config`\>

  ↳ **`ConfigCommand`**

## Properties

### argv

• **argv**: `string`[]

#### Inherited from

[Command](Command.md).[argv](Command.md#argv)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:9

___

### config

• **config**: `Config`

#### Inherited from

[Command](Command.md).[config](Command.md#config)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:10

___

### \_base

▪ `Static` **\_base**: `string`

#### Inherited from

[Command](Command.md).[_base](Command.md#_base)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:11

___

### id

▪ `Static` **id**: `string`

A command ID, used mostly in error or verbose reporting.

#### Inherited from

[Command](Command.md).[id](Command.md#id)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:13

___

### summary

▪ `Static` `Optional` **summary**: `string`

The tweet-sized description for your class, used in a parent-commands
sub-command listing and as the header for the command help.

#### Inherited from

[Command](Command.md).[summary](Command.md#summary)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:18

___

### description

▪ `Static` **description**: `string`

A full description of how to use the command.

If no summary, the first line of the description will be used as the summary.

#### Inherited from

[Command](Command.md).[description](Command.md#description)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:24

___

### hidden

▪ `Static` **hidden**: `boolean`

Hide the command from help?

#### Inherited from

[Command](Command.md).[hidden](Command.md#hidden)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:26

___

### state

▪ `Static` `Optional` **state**: `string`

Mark the command as a given state (e.g. beta) in help?

#### Inherited from

[Command](Command.md).[state](Command.md#state)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:28

___

### usage

▪ `Static` **usage**: `string` \| `string`[]

An override string (or strings) for the default usage documentation.

#### Inherited from

[Command](Command.md).[usage](Command.md#usage)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:32

___

### help

▪ `Static` **help**: `string`

#### Inherited from

[Command](Command.md).[help](Command.md#help)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:33

___

### aliases

▪ `Static` **aliases**: `string`[]

An array of aliases for this command.

#### Inherited from

[Command](Command.md).[aliases](Command.md#aliases)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:35

___

### strict

▪ `Static` **strict**: `boolean`

When set to false, allows a variable amount of arguments

#### Inherited from

[Command](Command.md).[strict](Command.md#strict)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:37

___

### parse

▪ `Static` **parse**: `boolean`

#### Inherited from

[Command](Command.md).[parse](Command.md#parse)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:38

___

### args

▪ `Static` `Optional` **args**: `ArgInput`

An order-dependent array of arguments for the command

#### Inherited from

[Command](Command.md).[args](Command.md#args)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:40

___

### plugin

▪ `Static` **plugin**: `Plugin`

#### Inherited from

[Command](Command.md).[plugin](Command.md#plugin)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:41

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

packages/common/node_modules/@oclif/core/lib/command.d.ts:56

___

### parserOptions

▪ `Static` **parserOptions**: `Object`

#### Inherited from

[Command](Command.md).[parserOptions](Command.md#parseroptions)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:57

___

### \_enableJsonFlag

▪ `Static` **\_enableJsonFlag**: `boolean`

#### Inherited from

[Command](Command.md).[_enableJsonFlag](Command.md#_enablejsonflag)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:58

___

### run

▪ `Static` **run**: (`argv?`: `string`[], `config?`: `LoadOptions`) => `PromiseLike`<`any`\>

#### Type declaration

▸ (`argv?`, `config?`): `PromiseLike`<`any`\>

instantiate and run the command

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `argv?` | `string`[] | argv |
| `config?` | `LoadOptions` | - |

##### Returns

`PromiseLike`<`any`\>

#### Inherited from

[Command](Command.md).[run](Command.md#run)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:67

___

### \_globalFlags

▪ `Static` `Protected` **\_globalFlags**: `object`

#### Inherited from

[Command](Command.md).[_globalFlags](Command.md#_globalflags)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:68

___

### \_flags

▪ `Static` `Protected` **\_flags**: `object`

A hash of flags for the command

#### Inherited from

[Command](Command.md).[_flags](Command.md#_flags)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:72

___

### id

• **id**: `string`

#### Inherited from

[Command](Command.md).[id](Command.md#id-1)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:75

___

### debug

• `Protected` **debug**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Inherited from

[Command](Command.md).[debug](Command.md#debug)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:76

___

### logger

• **logger**: [`Logger`](Logger.md)

#### Inherited from

[Command](Command.md).[logger](Command.md#logger)

#### Defined in

packages/common/src/commands/base.command.ts:14

___

### tasks

• **tasks**: `Manager`<`Ctx`, ``"default"``, ``"verbose"``\>

#### Inherited from

[Command](Command.md).[tasks](Command.md#tasks)

#### Defined in

packages/common/src/commands/base.command.ts:15

___

### validator

• **validator**: [`ValidatorService`](ValidatorService.md)

#### Inherited from

[Command](Command.md).[validator](Command.md#validator)

#### Defined in

packages/common/src/commands/base.command.ts:16

___

### isVerbose

• **isVerbose**: `boolean`

#### Inherited from

[Command](Command.md).[isVerbose](Command.md#isverbose)

#### Defined in

packages/common/src/commands/base.command.ts:17

___

### isDebug

• **isDebug**: `boolean`

#### Inherited from

[Command](Command.md).[isDebug](Command.md#isdebug)

#### Defined in

packages/common/src/commands/base.command.ts:18

___

### isSilent

• **isSilent**: `boolean`

#### Inherited from

[Command](Command.md).[isSilent](Command.md#issilent)

#### Defined in

packages/common/src/commands/base.command.ts:19

___

### cs

• **cs**: [`ConfigService`](ConfigService.md)<`Config`\>

#### Inherited from

[Command](Command.md).[cs](Command.md#cs)

#### Defined in

packages/common/src/commands/base.command.ts:20

___

### parser

• **parser**: `ParserService`

#### Inherited from

[Command](Command.md).[parser](Command.md#parser)

#### Defined in

packages/common/src/commands/base.command.ts:21

___

### fs

• **fs**: [`FileSystemService`](FileSystemService.md)

#### Inherited from

[Command](Command.md).[fs](Command.md#fs)

#### Defined in

packages/common/src/commands/base.command.ts:22

___

### choices

• **choices**: [`ConfigCommandChoices`](../types/ConfigCommandChoices.md)<`CommandChoices`\>

#### Defined in

packages/common/src/commands/config.command.ts:12

___

### locker

• **locker**: [`LockerService`](LockerService.md)

#### Defined in

packages/common/src/commands/config.command.ts:13

## Accessors

### enableJsonFlag

• `Static` `get` **enableJsonFlag**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseCommand.enableJsonFlag

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:59

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

packages/common/node_modules/@oclif/core/lib/command.d.ts:60

___

### globalFlags

• `Static` `get` **globalFlags**(): `object`

#### Returns

`object`

#### Inherited from

BaseCommand.globalFlags

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:69

• `Static` `set` **globalFlags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `object` |

#### Returns

`void`

#### Inherited from

BaseCommand.globalFlags

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:70

___

### flags

• `Static` `get` **flags**(): `object`

#### Returns

`object`

#### Inherited from

BaseCommand.flags

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:73

• `Static` `set` **flags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `object` |

#### Returns

`void`

#### Inherited from

BaseCommand.flags

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:74

___

### ctor

• `get` **ctor**(): typeof `default`

#### Returns

typeof `default`

#### Inherited from

BaseCommand.ctor

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:78

## Constructors

### constructor

• **new ConfigCommand**<`CommandChoices`, `Ctx`, `Config`\>(`argv`, `config`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CommandChoices` | extends `string` |
| `Ctx` | extends `unknown` = `any` |
| `Config` | extends [`BaseConfig`](BaseConfig.md)<`Config`\> = [`BaseConfig`](BaseConfig.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `string`[] |
| `config` | `Config` |

#### Inherited from

[Command](Command.md).[constructor](Command.md#constructor)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:77

## Methods

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

[Command](Command.md).[warn](Command.md#warn)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:81

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

packages/common/node_modules/@oclif/core/lib/command.d.ts:82

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

packages/common/node_modules/@oclif/core/lib/command.d.ts:86

___

### log

▸ **log**(`message?`, ...`args`): `void`

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

packages/common/node_modules/@oclif/core/lib/command.d.ts:90

___

### logToStderr

▸ **logToStderr**(`message?`, ...`args`): `void`

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

packages/common/node_modules/@oclif/core/lib/command.d.ts:91

___

### jsonEnabled

▸ **jsonEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Command](Command.md).[jsonEnabled](Command.md#jsonenabled)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:92

___

### parse

▸ `Protected` **parse**<`F`, `G`, `A`\>(`options?`, `argv?`): `Promise`<`ParserOutput`<`F`, `G`, `A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | `F` |
| `G` | `G` |
| `A` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Input`<`F`, `G`\> |
| `argv?` | `string`[] |

#### Returns

`Promise`<`ParserOutput`<`F`, `G`, `A`\>\>

#### Inherited from

[Command](Command.md).[parse](Command.md#parse-1)

#### Defined in

packages/common/node_modules/@oclif/core/lib/command.d.ts:98

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

packages/common/node_modules/@oclif/core/lib/command.d.ts:105

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

packages/common/node_modules/@oclif/core/lib/command.d.ts:106

___

### init

▸ **init**(): `Promise`<`void`\>

Initial functions / constructor

#### Returns

`Promise`<`void`\>

#### Inherited from

[Command](Command.md).[init](Command.md#init)

#### Defined in

packages/common/src/commands/base.command.ts:32

___

### shouldRunBefore

▸ **shouldRunBefore**(): `void` \| `Promise`<`void`\>

Construct the class if you dont want to extend init or constructor.

#### Returns

`void` \| `Promise`<`void`\>

#### Inherited from

[Command](Command.md).[shouldRunBefore](Command.md#shouldrunbefore)

#### Defined in

packages/common/src/commands/base.command.ts:81

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

packages/common/src/commands/base.command.ts:87

___

### runTasks

▸ **runTasks**(): `Promise`<`Ctx`\>

Run all tasks from task manager.

#### Returns

`Promise`<`Ctx`\>

#### Inherited from

[Command](Command.md).[runTasks](Command.md#runtasks)

#### Defined in

packages/common/src/commands/base.command.ts:90

___

### finally

▸ **finally**(): `Promise`<{ `ctx`: `Ctx`  }\>

Tasks to run before end of the command.

#### Returns

`Promise`<{ `ctx`: `Ctx`  }\>

#### Inherited from

[Command](Command.md).[finally](Command.md#finally)

#### Defined in

packages/common/src/commands/base.command.ts:103

___

### catch

▸ **catch**(`e`): `Promise`<`void`\>

Catch any error occurred during command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Command](Command.md).[catch](Command.md#catch)

#### Defined in

packages/common/src/commands/base.command.ts:114

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

packages/common/src/commands/base.command.ts:123

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

packages/common/src/commands/base.command.ts:138

___

### run

▸ **run**(): `Promise`<`void`\>

Every command needs to implement run for running the command itself.

#### Returns

`Promise`<`void`\>

#### Overrides

[Command](Command.md).[run](Command.md#run-1)

#### Defined in

packages/common/src/commands/config.command.ts:15

___

### generate

▸ `Private` **generate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/commands/config.command.ts:24

___

### setup

▸ `Abstract` **setup**(): [`ConfigCommandSetup`](../interfaces/ConfigCommandSetup.md)<`CommandChoices`\> \| `Promise`<[`ConfigCommandSetup`](../interfaces/ConfigCommandSetup.md)<`CommandChoices`\>\>

#### Returns

[`ConfigCommandSetup`](../interfaces/ConfigCommandSetup.md)<`CommandChoices`\> \| `Promise`<[`ConfigCommandSetup`](../interfaces/ConfigCommandSetup.md)<`CommandChoices`\>\>

#### Defined in

packages/common/src/commands/config.command.ts:35
