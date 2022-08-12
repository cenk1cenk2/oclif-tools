# Class: YamlParser

## Implements

- [`GenericParser`](GenericParser.md)

## Properties

### extensions

▪ `Static` **extensions**: `string`[]

#### Implementation of

[GenericParser](GenericParser.md).[extensions](GenericParser.md#extensions)

#### Defined in

packages/common/src/lib/parser/yaml-parser.service.ts:7

---

### instance

▪ `Static` **instance**: [`YamlParser`](YamlParser.md)

#### Defined in

packages/common/src/lib/parser/yaml-parser.service.ts:8

---

### logger

• `Private` `Readonly` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/parser/yaml-parser.service.ts:9

## Constructors

### constructor

• **new YamlParser**()

#### Defined in

packages/common/src/lib/parser/yaml-parser.service.ts:11

## Methods

### parse

▸ **parse**<`T`\>(`data`): `T`

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name   | Type                 |
| :----- | :------------------- |
| `data` | `string` \| `Buffer` |

#### Returns

`T`

#### Implementation of

[GenericParser](GenericParser.md).[parse](GenericParser.md#parse)

#### Defined in

packages/common/src/lib/parser/yaml-parser.service.ts:21

---

### stringify

▸ **stringify**<`T`\>(`data`): `string`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `data` | `T`  |

#### Returns

`string`

#### Implementation of

[GenericParser](GenericParser.md).[stringify](GenericParser.md#stringify)

#### Defined in

packages/common/src/lib/parser/yaml-parser.service.ts:31
