# Class: Logger

A general logger for the the CLI applications.

## Properties

### instance

▪ `Static` **instance**: [`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:13

___

### logger

• `Private` **logger**: [`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:14

## Constructors

### constructor

• **new Logger**(`context?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `string` |
| `options?` | [`LoggerOptions`](../interfaces/LoggerOptions.md) |

#### Defined in

packages/common/src/utils/logger/logger.ts:16

## Methods

### log

▸ **log**(`level`, `data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevels`](../enums/LogLevels.md) |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:38

___

### direct

▸ **direct**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:42

___

### fatal

▸ **fatal**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:46

___

### error

▸ **error**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:50

___

### warn

▸ **warn**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:54

___

### info

▸ **info**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:58

___

### debug

▸ **debug**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:62

___

### verbose

▸ **verbose**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:66

___

### trace

▸ **trace**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:70

___

### run

▸ **run**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:75

___

### end

▸ **end**(`data`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:79

___

### initiateLogger

▸ `Private` **initiateLogger**(): [`Winston`](../types/Winston.md)

#### Returns

[`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:83

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

packages/common/src/utils/logger/logger.ts:127

___

### logColoring

▸ `Private` **logColoring**(`__namedParameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LoggerFormat`](../interfaces/LoggerFormat.md) |

#### Returns

`string`

#### Defined in

packages/common/src/utils/logger/logger.ts:131
