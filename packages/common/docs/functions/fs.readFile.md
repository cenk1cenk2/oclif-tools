# Function: readFile

[fs](../modules/fs.md).readFile

▸ **readFile**(`path`, `options?`): `Promise`<`Buffer`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options?` | `Object` | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |
| `options.encoding?` | ``null`` | - |
| `options.flag?` | `string` | - |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2466

▸ **readFile**(`path`, `options`): `Promise`<`string`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: `string`  } | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2481

▸ **readFile**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `flag?`: `string`  } | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2498

▸ **readFile**(`path`, `options`, `callback`): `void`

Asynchronously reads the entire contents of a file.

```js
import { readFile } from 'fs';

readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

The callback is passed two arguments `(err, data)`, where `data` is the
contents of the file.

If no encoding is specified, then the raw buffer is returned.

If `options` is a string, then it specifies the encoding:

```js
import { readFile } from 'fs';

readFile('/etc/passwd', 'utf8', callback);
```

When the path is a directory, the behavior of `fs.readFile()` and [readFileSync](fs.readFileSync.md) is platform-specific. On macOS, Linux, and Windows, an
error will be returned. On FreeBSD, a representation of the directory's contents
will be returned.

```js
import { readFile } from 'fs';

// macOS, Linux, and Windows
readFile('<directory>', (err, data) => {
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
});

//  FreeBSD
readFile('<directory>', (err, data) => {
  // => null, <data>
});
```

It is possible to abort an ongoing request using an `AbortSignal`. If a
request is aborted the callback is called with an `AbortError`:

```js
import { readFile } from 'fs';

const controller = new AbortController();
const signal = controller.signal;
readFile(fileInfo[0].name, { signal }, (err, buf) => {
  // ...
});
// When you want to abort the request
controller.abort();
```

The `fs.readFile()` function buffers the entire file. To minimize memory costs,
when possible prefer streaming via `fs.createReadStream()`.

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.readFile` performs.

**`Since`**

v0.1.29

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | filename or file descriptor |
| `options` | { `encoding?`: ``null`` ; `flag?`: `string`  } & `Abortable` | - |
| `callback` | (`err`: `ErrnoException`, `data`: `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2406

▸ **readFile**(`path`, `options`, `callback`): `void`

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: `string`  } & `Abortable` | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |
| `callback` | (`err`: `ErrnoException`, `data`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2424

▸ **readFile**(`path`, `options`, `callback`): `void`

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `flag?`: `string`  } & `Abortable` | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |
| `callback` | (`err`: `ErrnoException`, `data`: `string` \| `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2441

▸ **readFile**(`path`, `callback`): `void`

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `callback` | (`err`: `ErrnoException`, `data`: `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2457
