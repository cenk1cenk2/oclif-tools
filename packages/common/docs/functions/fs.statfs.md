# Function: statfs

[fs](../modules/fs.md).statfs

▸ **statfs**(`path`, `callback`): `void`

Asynchronous statfs(2). Returns information about the mounted file system which contains path. The callback gets two arguments (err, stats) where stats is an <fs.StatFs> object.
In case of an error, the err.code will be one of Common System Errors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to an existing file or directory on the file system to be queried. |
| `callback` | (`err`: `ErrnoException`, `stats`: [`StatsFs`](../classes/fs.StatsFs.md)) => `void` |  |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1126

▸ **statfs**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) & { `bigint?`: ``false``  } |
| `callback` | (`err`: `ErrnoException`, `stats`: [`StatsFs`](../classes/fs.StatsFs.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1127

▸ **statfs**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) & { `bigint`: ``true``  } |
| `callback` | (`err`: `ErrnoException`, `stats`: [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1136

▸ **statfs**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatFsOptions`](../interfaces/fs.StatFsOptions.md) |
| `callback` | (`err`: `ErrnoException`, `stats`: [`StatsFs`](../classes/fs.StatsFs.md) \| [`BigIntStatsFs`](../interfaces/fs.BigIntStatsFs.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1143
