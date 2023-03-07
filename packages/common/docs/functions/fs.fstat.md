# Function: fstat

[fs](../modules/fs.md).fstat

▸ **fstat**(`fd`, `options?`): `Promise`<[`Stats`](../classes/fs.Stats.md)\>

Asynchronous fstat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `options?` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1006

▸ **fstat**(`fd`, `options`): `Promise`<[`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1012

▸ **fstat**(`fd`, `options?`): `Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options?` | [`StatOptions`](../interfaces/fs.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1018

▸ **fstat**(`fd`, `callback`): `void`

Invokes the callback with the `fs.Stats` for the file descriptor.

See the POSIX [`fstat(2)`](http://man7.org/linux/man-pages/man2/fstat.2.html) documentation for more detail.

**`Since`**

v0.1.95

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | (`err`: `ErrnoException`, `stats`: [`Stats`](../classes/fs.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:983

▸ **fstat**(`fd`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint?`: ``false``  } |
| `callback` | (`err`: `ErrnoException`, `stats`: [`Stats`](../classes/fs.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:984

▸ **fstat**(`fd`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint`: ``true``  } |
| `callback` | (`err`: `ErrnoException`, `stats`: [`BigIntStats`](../interfaces/fs.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:993

▸ **fstat**(`fd`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) |
| `callback` | (`err`: `ErrnoException`, `stats`: [`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1000
