# Class: GenericParser

## Implemented by

- [`EnvironmentVariableParser`](EnvironmentVariableParser.md)
- [`JsonParser`](JsonParser.md)
- [`YamlParser`](YamlParser.md)

## Properties

### extensions

▪ `Static` **extensions**: `string`[]

#### Defined in

packages/common/src/lib/parser/parser.interface.ts:2

## Constructors

### constructor

• **new GenericParser**()

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

#### Defined in

packages/common/src/lib/parser/parser.interface.ts:3

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

#### Defined in

packages/common/src/lib/parser/parser.interface.ts:4
