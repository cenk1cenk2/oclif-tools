# Class: Logger

A general logger for the the CLI applications.

## Properties

### instance

▪ `Static` **instance**: [`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:14

___

### logger

• `Private` **logger**: [`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:15

___

### context

• `Private` `Optional` **context**: `string`

#### Defined in

packages/common/src/utils/logger/logger.ts:17

___

### options

• `Private` `Optional` **options**: [`LoggerOptions`](../interfaces/LoggerOptions.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:17

## Constructors

### constructor

• **new Logger**(`context?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `string` |
| `options?` | [`LoggerOptions`](../interfaces/LoggerOptions.md) |

#### Defined in

packages/common/src/utils/logger/logger.ts:17

## Methods

### log

▸ **log**(`level`, `data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevels`](../enums/LogLevels.md) |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:40

___

### direct

▸ **direct**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:44

___

### fatal

▸ **fatal**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:48

___

### error

▸ **error**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:52

___

### warn

▸ **warn**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:56

___

### info

▸ **info**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:60

___

### debug

▸ **debug**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:64

___

### verbose

▸ **verbose**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:68

___

### trace

▸ **trace**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:72

___

### run

▸ **run**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:77

___

### end

▸ **end**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:81

___

### stage

▸ **stage**(`data`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:85

___

### initiateLogger

▸ `Private` **initiateLogger**(): [`Winston`](../types/Winston.md)

#### Returns

[`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:89

___

### parseMessage

▸ `Private` **parseMessage**(`level`, `data`, `args?`, `format?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevels`](../enums/LogLevels.md) |
| `data` | `string` \| `Buffer` |
| `args?` | `any`[] |
| `format?` | `Partial`<[`LoggerFormat`](../interfaces/LoggerFormat.md)\> |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:133

___

### logColoring

▸ `Private` **logColoring**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`LoggerFormat`](../interfaces/LoggerFormat.md) |

#### Returns

`string`

#### Defined in

packages/common/src/utils/logger/logger.ts:143
