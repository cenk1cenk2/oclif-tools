# Class: ListrLogger

## Hierarchy

- `Logger`

  ↳ **`ListrLogger`**

## Methods

### parseMessage

▸ `Protected` **parseMessage**(`level`, `message`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `LogLevels` |
| `message` | `string` |

#### Returns

`string`

#### Inherited from

BaseLogger.parseMessage

#### Defined in

packages/common/node_modules/listr2/dist/index.d.ts:540

___

### logColoring

▸ `Protected` **logColoring**(`__namedParameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.level` | `LogLevels` |
| `__namedParameters.message` | `string` |

#### Returns

`string`

#### Inherited from

BaseLogger.logColoring

#### Defined in

packages/common/node_modules/listr2/dist/index.d.ts:541

___

### fail

▸ **fail**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Overrides

BaseLogger.fail

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:14

___

### skip

▸ **skip**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Overrides

BaseLogger.skip

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:18

___

### success

▸ **success**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Overrides

BaseLogger.success

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:22

___

### data

▸ **data**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Overrides

BaseLogger.data

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:26

___

### start

▸ **start**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Overrides

BaseLogger.start

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:30

___

### title

▸ **title**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Overrides

BaseLogger.title

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:34

___

### retry

▸ **retry**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Overrides

BaseLogger.retry

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:38

___

### rollback

▸ **rollback**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Overrides

BaseLogger.rollback

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:42

## Properties

### logger

• **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:6

## Constructors

### constructor

• **new ListrLogger**(`context?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `string` |

#### Overrides

BaseLogger.constructor

#### Defined in

packages/common/src/utils/logger/listr-logger.ts:8
