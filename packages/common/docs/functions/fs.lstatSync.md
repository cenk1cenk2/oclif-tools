# Function: lstatSync

[fs](../modules/fs.md).lstatSync

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs.Stats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `undefined` | - |

#### Returns

[`Stats`](../classes/fs.Stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:936

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs.Stats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs.StatSyncOptions.md) & { `bigint?`: ``false`` ; `throwIfNoEntry`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs.Stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:937

▸ **lstatSync**(`path`, `options`): [`BigIntStats`](../interfaces/fs.BigIntStats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs.StatSyncOptions.md) & { `bigint`: ``true`` ; `throwIfNoEntry`: ``false``  } | - |

#### Returns

[`BigIntStats`](../interfaces/fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:944

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs.Stats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs.StatSyncOptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs.Stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:951

▸ **lstatSync**(`path`, `options`): [`BigIntStats`](../interfaces/fs.BigIntStats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs.StatSyncOptions.md) & { `bigint`: ``true``  } | - |

#### Returns

[`BigIntStats`](../interfaces/fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:957

▸ **lstatSync**(`path`, `options`): [`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`StatSyncOptions`](../interfaces/fs.StatSyncOptions.md) & { `bigint`: `boolean` ; `throwIfNoEntry?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:963

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatSyncOptions`](../interfaces/fs.StatSyncOptions.md) | - |

#### Returns

[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](../interfaces/fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:970
