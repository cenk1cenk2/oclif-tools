# Class: ConfigService

## Implements

- [`GlobalConfig`](../interfaces/GlobalConfig.md)

## Properties

### instance

▪ `Static` `Private` **instance**: [`ConfigService`](ConfigService.md)

#### Defined in

packages/common/src/lib/config/config.service.ts:15

___

### defaults

• **defaults**: `string`

#### Defined in

packages/common/src/lib/config/config.service.ts:16

___

### root

• **root**: `string`

#### Defined in

packages/common/src/lib/config/config.service.ts:17

___

### parser

• **parser**: [`ParserService`](ParserService.md)

#### Defined in

packages/common/src/lib/config/config.service.ts:18

___

### logLevel

• **logLevel**: [`LogLevels`](../enums/LogLevels.md)

#### Implementation of

[GlobalConfig](../interfaces/GlobalConfig.md).[logLevel](../interfaces/GlobalConfig.md#loglevel)

#### Defined in

packages/common/src/lib/config/config.service.ts:19

___

### isVerbose

• **isVerbose**: `boolean`

#### Implementation of

[GlobalConfig](../interfaces/GlobalConfig.md).[isVerbose](../interfaces/GlobalConfig.md#isverbose)

#### Defined in

packages/common/src/lib/config/config.service.ts:20

___

### isDebug

• **isDebug**: `boolean`

#### Implementation of

[GlobalConfig](../interfaces/GlobalConfig.md).[isDebug](../interfaces/GlobalConfig.md#isdebug)

#### Defined in

packages/common/src/lib/config/config.service.ts:21

___

### isSilent

• **isSilent**: `boolean`

#### Implementation of

[GlobalConfig](../interfaces/GlobalConfig.md).[isSilent](../interfaces/GlobalConfig.md#issilent)

#### Defined in

packages/common/src/lib/config/config.service.ts:22

___

### ci

• **ci**: `boolean`

#### Implementation of

[GlobalConfig](../interfaces/GlobalConfig.md).[ci](../interfaces/GlobalConfig.md#ci)

#### Defined in

packages/common/src/lib/config/config.service.ts:23

___

### json

• **json**: `boolean`

#### Implementation of

[GlobalConfig](../interfaces/GlobalConfig.md).[json](../interfaces/GlobalConfig.md#json)

#### Defined in

packages/common/src/lib/config/config.service.ts:24

___

### logger

• `Private` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/config/config.service.ts:25

___

### oclif

• **oclif**: `Config`

#### Defined in

packages/common/src/lib/config/config.service.ts:27

___

### command

• **command**: typeof `default`

#### Defined in

packages/common/src/lib/config/config.service.ts:27

## Constructors

### constructor

• **new ConfigService**(`oclif`, `command`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oclif` | `Config` |
| `command` | typeof `default` |
| `config` | `Omit`<[`GlobalConfig`](../interfaces/GlobalConfig.md), ``"isVerbose"`` \| ``"isDebug"`` \| ``"isSilent"``\> |

#### Defined in

packages/common/src/lib/config/config.service.ts:27

## Methods

### read

▸ **read**<`T`\>(`path`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/lib/config/config.service.ts:52

___

### extend

▸ **extend**<`T`\>(`paths`, `strategy?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `paths` | (`string` \| `Partial`<`T`\>)[] | `undefined` |
| `strategy` | [`MergeStrategy`](../enums/MergeStrategy.md) | `MergeStrategy.OVERWRITE` |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/lib/config/config.service.ts:60

___

### merge

▸ **merge**<`T`\>(`configs`, `strategy?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configs` | `Partial`<`T`\>[] | `undefined` |
| `strategy` | [`MergeStrategy`](../enums/MergeStrategy.md) | `MergeStrategy.OVERWRITE` |

#### Returns

`T`

#### Defined in

packages/common/src/lib/config/config.service.ts:82

___

### env

▸ **env**<`T`\>(`definition`, `config`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `string` \| `Record`<`PropertyKey`, `any`\> |
| `config` | `T` |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/lib/config/config.service.ts:90

___

### write

▸ **write**<`T`\>(`path`, `data`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/config/config.service.ts:209

___

### recalculate

▸ `Private` **recalculate**(): `void`

#### Returns

`void`

#### Defined in

packages/common/src/lib/config/config.service.ts:213
