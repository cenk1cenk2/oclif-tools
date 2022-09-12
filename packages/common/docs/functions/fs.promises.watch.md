# Function: watch

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).watch

▸ **watch**(`filename`, `options`): `AsyncIterable`<[`FileChangeInfo`](../interfaces/fs.promises.FileChangeInfo.md)<`Buffer`\>\>

Returns an async iterator that watches for changes on `filename`, where `filename`is either a file or a directory.

```js
const { watch } = require('fs/promises');

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 10000);

(async () => {
  try {
    const watcher = watch(__filename, { signal });
    for await (const event of watcher)
      console.log(event);
  } catch (err) {
    if (err.name === 'AbortError')
      return;
    throw err;
  }
})();
```

On most platforms, `'rename'` is emitted whenever a filename appears or
disappears in the directory.

All the `caveats` for `fs.watch()` also apply to `fsPromises.watch()`.

**`Since`**

v15.9.0, v14.18.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | ``"buffer"`` \| [`WatchOptions`](../interfaces/fs.WatchOptions.md) & { `encoding`: ``"buffer"``  } |

#### Returns

`AsyncIterable`<[`FileChangeInfo`](../interfaces/fs.promises.FileChangeInfo.md)<`Buffer`\>\>

of objects with the properties:

#### Defined in

node_modules/@types/node/fs/promises.d.ts:1078

▸ **watch**(`filename`, `options?`): `AsyncIterable`<[`FileChangeInfo`](../interfaces/fs.promises.FileChangeInfo.md)<`string`\>\>

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](../types/fs.PathLike.md) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| [`WatchOptions`](../interfaces/fs.WatchOptions.md) | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |

#### Returns

`AsyncIterable`<[`FileChangeInfo`](../interfaces/fs.promises.FileChangeInfo.md)<`string`\>\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:1094

▸ **watch**(`filename`, `options`): `AsyncIterable`<[`FileChangeInfo`](../interfaces/fs.promises.FileChangeInfo.md)<`string`\>\> \| `AsyncIterable`<[`FileChangeInfo`](../interfaces/fs.promises.FileChangeInfo.md)<`Buffer`\>\>

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](../types/fs.PathLike.md) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. |
| `options` | `string` \| [`WatchOptions`](../interfaces/fs.WatchOptions.md) | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |

#### Returns

`AsyncIterable`<[`FileChangeInfo`](../interfaces/fs.promises.FileChangeInfo.md)<`string`\>\> \| `AsyncIterable`<[`FileChangeInfo`](../interfaces/fs.promises.FileChangeInfo.md)<`Buffer`\>\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:1103
