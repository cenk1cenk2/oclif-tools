# Class: Logger

A general logger for the the CLI applications.

## Properties

### instance

▪ `Static` **instance**: [`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:14

---

### logger

• `Private` **logger**: [`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:15

## Constructors

### constructor

• **new Logger**(`context?`, `options?`)

#### Parameters

| Name       | Type                                              |
| :--------- | :------------------------------------------------ |
| `context?` | `string`                                          |
| `options?` | [`LoggerOptions`](../interfaces/LoggerOptions.md) |

#### Defined in

packages/common/src/utils/logger/logger.ts:17

## Methods

### log

▸ **log**(`level`, `data`, ...`args`): `void`

#### Parameters

| Name      | Type                                 |
| :-------- | :----------------------------------- |
| `level`   | [`LogLevels`](../enums/LogLevels.md) |
| `data`    | `string` \| `Buffer`                 |
| `...args` | `any`                                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:36

---

### direct

▸ **direct**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:40

---

### fatal

▸ **fatal**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:44

---

### error

▸ **error**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:48

---

### warn

▸ **warn**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:52

---

### info

▸ **info**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:56

---

### debug

▸ **debug**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:60

---

### verbose

▸ **verbose**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:64

---

### trace

▸ **trace**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:68

---

### run

▸ **run**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:73

---

### end

▸ **end**(`data`, ...`args`): `void`

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `data`    | `string` \| `Buffer` |
| `...args` | `any`                |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:77

---

### initiateLogger

▸ `Private` **initiateLogger**(): [`Winston`](../types/Winston.md)

#### Returns

[`Winston`](../types/Winston.md)

#### Defined in

packages/common/src/utils/logger/logger.ts:81

---

### parseMessage

▸ `Private` **parseMessage**(`level`, `data`, `args?`, `format?`): `void`

#### Parameters

| Name      | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| `level`   | [`LogLevels`](../enums/LogLevels.md)                        |
| `data`    | `string` \| `Buffer`                                        |
| `args?`   | `any`[]                                                     |
| `format?` | `Partial`<[`LoggerFormat`](../interfaces/LoggerFormat.md)\> |

#### Returns

`void`

#### Defined in

packages/common/src/utils/logger/logger.ts:125

---

### logColoring

▸ `Private` **logColoring**(`__namedParameters`): `string`

#### Parameters

| Name                | Type                                            |
| :------------------ | :---------------------------------------------- |
| `__namedParameters` | [`LoggerFormat`](../interfaces/LoggerFormat.md) |

#### Returns

`string`

#### Defined in

packages/common/src/utils/logger/logger.ts:129
