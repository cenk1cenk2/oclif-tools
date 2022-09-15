# Class: ParserService

## Properties

### instance

▪ `Static` `Private` **instance**: [`ParserService`](ParserService.md)

#### Defined in

packages/common/src/lib/parser/parser.service.ts:10

___

### parsers

• **parsers**: [`ClassType`](../types/ClassType.md)<[`GenericParser`](GenericParser.md)\>[]

#### Defined in

packages/common/src/lib/parser/parser.service.ts:11

___

### logger

• `Private` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/parser/parser.service.ts:12

___

### fs

• `Private` **fs**: [`FileSystemService`](FileSystemService.md)

#### Defined in

packages/common/src/lib/parser/parser.service.ts:13

## Constructors

### constructor

• **new ParserService**(`parsers?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsers?` | [`ClassType`](../types/ClassType.md)<[`GenericParser`](GenericParser.md)\>[] |

#### Defined in

packages/common/src/lib/parser/parser.service.ts:15

## Methods

### getParser

▸ **getParser**(`file`): [`GenericParser`](GenericParser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

[`GenericParser`](GenericParser.md)

#### Defined in

packages/common/src/lib/parser/parser.service.ts:32

___

### setParsers

▸ **setParsers**(...`parsers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parsers` | [`ClassType`](../types/ClassType.md)<[`GenericParser`](GenericParser.md)\>[] |

#### Returns

`void`

#### Defined in

packages/common/src/lib/parser/parser.service.ts:43

___

### addParsers

▸ **addParsers**(...`parsers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...parsers` | [`ClassType`](../types/ClassType.md)<[`GenericParser`](GenericParser.md)\>[] |

#### Returns

`void`

#### Defined in

packages/common/src/lib/parser/parser.service.ts:47

___

### read

▸ **read**<`T`\>(`file`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/lib/parser/parser.service.ts:51

___

### write

▸ **write**<`T`\>(`file`, `data`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/parser/parser.service.ts:55

___

### parse

▸ **parse**<`T`\>(`file`, `data`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `Buffer` |

#### Returns

`T`

#### Defined in

packages/common/src/lib/parser/parser.service.ts:59

___

### stringify

▸ **stringify**<`T`\>(`file`, `data`): `string` \| `Promise`<`string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `T` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

packages/common/src/lib/parser/parser.service.ts:65
