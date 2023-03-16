# Function: \_\_promisify\_\_

[fs](../modules/fs.md).[statfs](../modules/fs.statfs-1.md).__promisify__

▸ **__promisify__**(`path`, `options?`): `Promise`<[`StatsFs`](../classes/fs.StatsFs.md)\>

Asynchronous statfs(2) - Returns information about the mounted file system which contains path. The callback gets two arguments (err, stats) where stats is an <fs.StatFs> object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to an existing file or directory on the file system to be queried. |
| `options?` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

`Promise`<[`StatsFs`](../classes/fs.StatsFs.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1149

▸ **__promisify__**(`path`, `options`): `Promise`<[`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1155

▸ **__promisify__**(`path`, `options?`): `Promise`<[`StatsFs`](../classes/fs.StatsFs.md) \| [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) |

#### Returns

`Promise`<[`StatsFs`](../classes/fs.StatsFs.md) \| [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1161
