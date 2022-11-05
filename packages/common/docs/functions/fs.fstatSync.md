# Function: fstatSync

[fs](../modules/fs.md).fstatSync

▸ **fstatSync**(`fd`, `options?`): [`Stats`](../classes/fs.Stats.md)

Retrieves the `fs.Stats` for the file descriptor.

See the POSIX [`fstat(2)`](http://man7.org/linux/man-pages/man2/fstat.2.html) documentation for more detail.

**`Since`**

v0.1.95

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options?` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

[`Stats`](../classes/fs.Stats.md)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1026

▸ **fstatSync**(`fd`, `options`): [`BigIntStats`](../interfaces/fs.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](../interfaces/fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1032

▸ **fstatSync**(`fd`, `options?`): [`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options?` | [`StatOptions`](../interfaces/fs.StatOptions.md) |

#### Returns

[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1038
