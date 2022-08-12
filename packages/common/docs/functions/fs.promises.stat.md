# Function: stat

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).stat

▸ **stat**(`path`, `opts?`): `Promise`<[`Stats`](../classes/fs.Stats.md)\>

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts?` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md)\>

Fulfills with the {fs.Stats} object for the given `path`.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:711

▸ **stat**(`path`, `opts`): `Promise`<[`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:717

▸ **stat**(`path`, `opts?`): `Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts?` | [`StatOptions`](../interfaces/fs.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:723
