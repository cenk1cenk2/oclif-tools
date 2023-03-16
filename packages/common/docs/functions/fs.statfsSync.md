# Function: statfsSync

[fs](../modules/fs.md).statfsSync

▸ **statfsSync**(`path`, `options?`): [`StatsFs`](../classes/fs.StatsFs.md)

Synchronous statfs(2). Returns information about the mounted file system which contains path. The callback gets two arguments (err, stats) where stats is an <fs.StatFs> object.
In case of an error, the err.code will be one of Common System Errors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to an existing file or directory on the file system to be queried. |
| `options?` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

[`StatsFs`](../classes/fs.StatsFs.md)

#### Defined in

node_modules/@types/node/fs.d.ts:1170

▸ **statfsSync**(`path`, `options`): [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)

#### Defined in

node_modules/@types/node/fs.d.ts:1176

▸ **statfsSync**(`path`, `options?`): [`StatsFs`](../classes/fs.StatsFs.md) \| [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) |

#### Returns

[`StatsFs`](../classes/fs.StatsFs.md) \| [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)

#### Defined in

node_modules/@types/node/fs.d.ts:1183
