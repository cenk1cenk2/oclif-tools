# Function: unwatchFile

[fs](../modules/fs.md).unwatchFile

▸ **unwatchFile**(`filename`, `listener?`): `void`

Stop watching for changes on `filename`. If `listener` is specified, only that
particular listener is removed. Otherwise, _all_ listeners are removed,
effectively stopping watching of `filename`.

Calling `fs.unwatchFile()` with a filename that is not being watched is a
no-op, not an error.

Using [watch](fs.watch.md) is more efficient than `fs.watchFile()` and`fs.unwatchFile()`. `fs.watch()` should be used instead of `fs.watchFile()`and `fs.unwatchFile()` when possible.

**`Since`**

v0.1.31

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](../types/fs.PathLike.md) | - |
| `listener?` | (`curr`: [`Stats`](../classes/fs.Stats.md), `prev`: [`Stats`](../classes/fs.Stats.md)) => `void` | Optional, a listener previously attached using `fs.watchFile()` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2930
