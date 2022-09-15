# Class: JsonParser

## Implements

- [`GenericParser`](GenericParser.md)

## Properties

### extensions

▪ `Static` **extensions**: `string`[]

#### Implementation of

[GenericParser](GenericParser.md).[extensions](GenericParser.md#extensions)

#### Defined in

packages/common/src/lib/parser/json-parser.service.ts:5

___

### instance

▪ `Static` `Private` **instance**: [`JsonParser`](JsonParser.md)

#### Defined in

packages/common/src/lib/parser/json-parser.service.ts:6

___

### logger

• `Private` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/parser/json-parser.service.ts:7

## Constructors

### constructor

• **new JsonParser**()

#### Defined in

packages/common/src/lib/parser/json-parser.service.ts:9

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

packages/common/src/lib/parser/json-parser.service.ts:21

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

packages/common/src/lib/parser/json-parser.service.ts:31
