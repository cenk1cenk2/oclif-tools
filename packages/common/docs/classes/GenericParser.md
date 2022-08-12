# Class: GenericParser

## Implemented by

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

▸ **parse**<`T`\>(`data`): `T` \| `Promise`<`T`\>

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name   | Type                 |
| :----- | :------------------- |
| `data` | `string` \| `Buffer` |

#### Returns

`T` \| `Promise`<`T`\>

#### Defined in

packages/common/src/lib/parser/parser.interface.ts:3

---

### stringify

▸ **stringify**<`T`\>(`data`): `string` \| `Promise`<`string`\>

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `data` | `T`  |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

packages/common/src/lib/parser/parser.interface.ts:4
