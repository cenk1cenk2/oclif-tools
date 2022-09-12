# Function: lstat

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).lstat

▸ **lstat**(`path`, `opts?`): `Promise`<[`Stats`](../classes/fs.Stats.md)\>

Equivalent to `fsPromises.stat()` unless `path` refers to a symbolic link,
in which case the link itself is stat-ed, not the file that it refers to.
Refer to the POSIX [`lstat(2)`](http://man7.org/linux/man-pages/man2/lstat.2.html) document for more detail.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts?` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md)\>

Fulfills with the {fs.Stats} object for the given symbolic link `path`.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:700

▸ **lstat**(`path`, `opts`): `Promise`<[`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:706

▸ **lstat**(`path`, `opts?`): `Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts?` | [`StatOptions`](../interfaces/fs.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:712
