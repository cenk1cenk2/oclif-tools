# Function: statfs

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).statfs

▸ **statfs**(`path`, `opts?`): `Promise`<[`StatsFs`](../classes/fs.StatsFs.md)\>

**`Since`**

v18.15.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts?` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`StatsFs`](../classes/fs.StatsFs.md)\>

Fulfills with an {fs.StatFs} for the file system.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:755

▸ **statfs**(`path`, `opts`): `Promise`<[`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:761

▸ **statfs**(`path`, `opts?`): `Promise`<[`StatsFs`](../classes/fs.StatsFs.md) \| [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `opts?` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) |

#### Returns

`Promise`<[`StatsFs`](../classes/fs.StatsFs.md) \| [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:767
