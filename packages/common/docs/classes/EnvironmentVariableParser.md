# Class: EnvironmentVariableParser

## Implements

- [`GenericParser`](GenericParser.md)

## Properties

### extensions

▪ `Static` **extensions**: `string`[]

#### Implementation of

[GenericParser](GenericParser.md).[extensions](GenericParser.md#extensions)

#### Defined in

packages/common/src/lib/parser/env-parser.service.ts:7

___

### instance

▪ `Static` `Private` **instance**: [`EnvironmentVariableParser`](EnvironmentVariableParser.md)

#### Defined in

packages/common/src/lib/parser/env-parser.service.ts:8

___

### logger

• `Private` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/parser/env-parser.service.ts:9

___

### LINE

• `Private` **LINE**: `RegExp`

#### Defined in

packages/common/src/lib/parser/env-parser.service.ts:10

## Constructors

### constructor

• **new EnvironmentVariableParser**()

#### Defined in

packages/common/src/lib/parser/env-parser.service.ts:12

## Methods

### parse

▸ **parse**<`T`\>(`data`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |

#### Returns

`T`

#### Implementation of

[GenericParser](GenericParser.md).[parse](GenericParser.md#parse)

#### Defined in

packages/common/src/lib/parser/env-parser.service.ts:24

___

### stringify

▸ **stringify**<`T`\>(`data`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`string`

#### Implementation of

[GenericParser](GenericParser.md).[stringify](GenericParser.md#stringify)

#### Defined in

packages/common/src/lib/parser/env-parser.service.ts:47
