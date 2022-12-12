# Function: readFileSync

[fs](../modules/fs.md).readFileSync

▸ **readFileSync**(`path`, `options?`): `Buffer`

Returns the contents of the `path`.

For detailed information, see the documentation of the asynchronous version of
this API: [readFile](fs.readFile.md).

If the `encoding` option is specified then this function returns a
string. Otherwise it returns a buffer.

Similar to [readFile](fs.readFile.md), when the path is a directory, the behavior of`fs.readFileSync()` is platform-specific.

```js
import { readFileSync } from 'fs';

// macOS, Linux, and Windows
readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
readFileSync('<directory>'); // => <data>
```

**`Since`**

v0.1.8

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | filename or file descriptor |
| `options?` | `Object` | - |
| `options.encoding?` | ``null`` | - |
| `options.flag?` | `string` | - |

#### Returns

`Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:2532

▸ **readFileSync**(`path`, `options`): `string`

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: `string`  } | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`string`

#### Defined in

node_modules/@types/node/fs.d.ts:2546

▸ **readFileSync**(`path`, `options?`): `string` \| `Buffer`

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `flag?`: `string`  } | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:2562
