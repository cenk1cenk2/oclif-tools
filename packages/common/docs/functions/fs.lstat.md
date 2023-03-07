# Function: lstat

[fs](../modules/fs.md).lstat

▸ **lstat**(`path`, `options?`): `Promise`<[`Stats`](../classes/fs.Stats.md)\>

Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1070

▸ **lstat**(`path`, `options`): `Promise`<[`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1076

▸ **lstat**(`path`, `options?`): `Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`StatOptions`](../interfaces/fs.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:1082

▸ **lstat**(`path`, `callback`): `void`

Retrieves the `fs.Stats` for the symbolic link referred to by the path.
The callback gets two arguments `(err, stats)` where `stats` is a `fs.Stats` object. `lstat()` is identical to `stat()`, except that if `path` is a symbolic
link, then the link itself is stat-ed, not the file that it refers to.

See the POSIX [`lstat(2)`](http://man7.org/linux/man-pages/man2/lstat.2.html) documentation for more details.

**`Since`**

v0.1.30

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `callback` | (`err`: `ErrnoException`, `stats`: [`Stats`](../classes/fs.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1047

▸ **lstat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint?`: ``false``  } |
| `callback` | (`err`: `ErrnoException`, `stats`: [`Stats`](../classes/fs.Stats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1048

▸ **lstat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) & { `bigint`: ``true``  } |
| `callback` | (`err`: `ErrnoException`, `stats`: [`BigIntStats`](../interfaces/fs.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1057

▸ **lstat**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatOptions`](../interfaces/fs.StatOptions.md) |
| `callback` | (`err`: `ErrnoException`, `stats`: [`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1064
