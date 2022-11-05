# Function: watch

[fs](../modules/fs.md).watch

▸ **watch**(`filename`, `options`, `listener?`): [`FSWatcher`](../interfaces/fs.FSWatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a
directory.

The second argument is optional. If `options` is provided as a string, it
specifies the `encoding`. Otherwise `options` should be passed as an object.

The listener callback gets two arguments `(eventType, filename)`. `eventType`is either `'rename'` or `'change'`, and `filename` is the name of the file
which triggered the event.

On most platforms, `'rename'` is emitted whenever a filename appears or
disappears in the directory.

The listener callback is attached to the `'change'` event fired by `fs.FSWatcher`, but it is not the same thing as the `'change'` value of`eventType`.

If a `signal` is passed, aborting the corresponding AbortController will close
the returned `fs.FSWatcher`.

**`Since`**

v0.5.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | ``"buffer"`` \| [`WatchOptions`](../interfaces/fs.WatchOptions.md) & { `encoding`: ``"buffer"``  } |
| `listener?` | [`WatchListener`](../types/fs.WatchListener.md)<`Buffer`\> |

#### Returns

[`FSWatcher`](../interfaces/fs.FSWatcher.md)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:2958

▸ **watch**(`filename`, `options?`, `listener?`): [`FSWatcher`](../interfaces/fs.FSWatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](../types/fs.PathLike.md) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| [`WatchOptions`](../interfaces/fs.WatchOptions.md) | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |
| `listener?` | [`WatchListener`](../types/fs.WatchListener.md)<`string`\> | - |

#### Returns

[`FSWatcher`](../interfaces/fs.FSWatcher.md)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:2975

▸ **watch**(`filename`, `options`, `listener?`): [`FSWatcher`](../interfaces/fs.FSWatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](../types/fs.PathLike.md) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `options` | `string` \| [`WatchOptions`](../interfaces/fs.WatchOptions.md) | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |
| `listener?` | [`WatchListener`](../types/fs.WatchListener.md)<`string` \| `Buffer`\> | - |

#### Returns

[`FSWatcher`](../interfaces/fs.FSWatcher.md)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:2984

▸ **watch**(`filename`, `listener?`): [`FSWatcher`](../interfaces/fs.FSWatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](../types/fs.PathLike.md) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `listener?` | [`WatchListener`](../types/fs.WatchListener.md)<`string`\> | - |

#### Returns

[`FSWatcher`](../interfaces/fs.FSWatcher.md)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:2989
