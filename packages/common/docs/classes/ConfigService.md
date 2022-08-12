# Class: ConfigService<Config\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Config` | extends [`BaseConfig`](BaseConfig.md) = [`BaseConfig`](BaseConfig.md) |

## Properties

### instance

▪ `Static` **instance**: [`ConfigService`](ConfigService.md)<`any`\>

#### Defined in

packages/common/src/lib/config/config.service.ts:14

___

### config

• **config**: `Config`

#### Defined in

packages/common/src/lib/config/config.service.ts:15

___

### command

• **command**: typeof `default`

#### Defined in

packages/common/src/lib/config/config.service.ts:16

___

### oclif

• **oclif**: `Config`

#### Defined in

packages/common/src/lib/config/config.service.ts:17

___

### defaults

• **defaults**: `string`

#### Defined in

packages/common/src/lib/config/config.service.ts:18

___

### dir

• **dir**: `string`

#### Defined in

packages/common/src/lib/config/config.service.ts:19

___

### parser

• **parser**: `ParserService`

#### Defined in

packages/common/src/lib/config/config.service.ts:20

___

### logger

• `Private` `Readonly` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/config/config.service.ts:21

## Constructors

### constructor

• **new ConfigService**<`Config`\>(`command`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Config` | extends [`BaseConfig`](BaseConfig.md)<`Config`\> = [`BaseConfig`](BaseConfig.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`Command`](Command.md)<`any`, `Config`\> |

#### Defined in

packages/common/src/lib/config/config.service.ts:23

## Methods

### read

▸ **read**<`T`\>(`strategy`, ...`paths`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`MergeStrategy`](../enums/MergeStrategy.md) |
| `...paths` | `string`[] |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/lib/config/config.service.ts:42

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

packages/common/src/lib/config/config.service.ts:52
