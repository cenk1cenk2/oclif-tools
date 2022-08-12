# Function: readFile

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).readFile

▸ **readFile**(`path`, `options?`): `Promise`<`Buffer`\>

Asynchronously reads the entire contents of a file.

If no encoding is specified (using `options.encoding`), the data is returned
as a `Buffer` object. Otherwise, the data will be a string.

If `options` is a string, then it specifies the encoding.

When the `path` is a directory, the behavior of `fsPromises.readFile()` is
platform-specific. On macOS, Linux, and Windows, the promise will be rejected
with an error. On FreeBSD, a representation of the directory's contents will be
returned.

It is possible to abort an ongoing `readFile` using an `AbortSignal`. If a
request is aborted the promise returned is rejected with an `AbortError`:

```js
import { readFile } from 'fs/promises';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const promise = readFile(fileName, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.readFile` performs.

Any specified `FileHandle` has to support reading.

**`Since`**

v10.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) \| [`FileHandle`](../interfaces/fs.promises.FileHandle.md) | filename or `FileHandle` |
| `options?` | { `encoding?`: ``null`` ; `flag?`: [`OpenMode`](../types/fs.OpenMode.md)  } & `Abortable` | - |

#### Returns

`Promise`<`Buffer`\>

Fulfills with the contents of the file.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:971

▸ **readFile**(`path`, `options`): `Promise`<`string`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) \| [`FileHandle`](../interfaces/fs.promises.FileHandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: [`OpenMode`](../types/fs.OpenMode.md)  } & `Abortable` | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:987

▸ **readFile**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) \| [`FileHandle`](../interfaces/fs.promises.FileHandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & `Abortable` & { `flag?`: [`OpenMode`](../types/fs.OpenMode.md)  } | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:1003
