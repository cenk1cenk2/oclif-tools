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

• `Private` `Readonly` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/parser/parser.service.ts:12

___

### fs

• `Private` `Readonly` **fs**: [`FileSystemService`](FileSystemService.md)

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

packages/common/src/lib/parser/parser.service.ts:29

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

packages/common/src/lib/parser/parser.service.ts:40

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

packages/common/src/lib/parser/parser.service.ts:44

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

packages/common/src/lib/parser/parser.service.ts:48

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

packages/common/src/lib/parser/parser.service.ts:52

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

packages/common/src/lib/parser/parser.service.ts:56

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

packages/common/src/lib/parser/parser.service.ts:62
