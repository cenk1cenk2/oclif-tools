# Function: writeFile

[fs](../modules/fs.md).writeFile

▸ **writeFile**(`path`, `data`, `options?`): `Promise`<`void`\>

Asynchronously writes data to a file, replacing the file if it already exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `ArrayBufferView` | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
| `options?` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2661

▸ **writeFile**(`file`, `data`, `options`, `callback`): `void`

When `file` is a filename, asynchronously writes data to the file, replacing the
file if it already exists. `data` can be a string or a buffer.

When `file` is a file descriptor, the behavior is similar to calling`fs.write()` directly (which is recommended). See the notes below on using
a file descriptor.

The `encoding` option is ignored if `data` is a buffer.

The `mode` option only affects the newly created file. See [open](fs.open.md) for more details.

```js
import { writeFile } from 'fs';
import { Buffer } from 'buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```

If `options` is a string, then it specifies the encoding:

```js
import { writeFile } from 'fs';

writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
```

It is unsafe to use `fs.writeFile()` multiple times on the same file without
waiting for the callback. For this scenario, [createWriteStream](fs.createWriteStream.md) is
recommended.

Similarly to `fs.readFile` \- `fs.writeFile` is a convenience method that
performs multiple `write` calls internally to write the buffer passed to it.
For performance sensitive code consider using [createWriteStream](fs.createWriteStream.md).

It is possible to use an `AbortSignal` to cancel an `fs.writeFile()`.
Cancelation is "best effort", and some amount of data is likely still
to be written.

```js
import { writeFile } from 'fs';
import { Buffer } from 'buffer';

const controller = new AbortController();
const { signal } = controller;
const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, { signal }, (err) => {
  // When a request is aborted - the callback is called with an AbortError
});
// When the request should be aborted
controller.abort();
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.writeFile` performs.

**`Since`**

v0.1.29

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | filename or file descriptor |
| `data` | `string` \| `ArrayBufferView` | - |
| `options` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) | - |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2640

▸ **writeFile**(`path`, `data`, `callback`): `void`

Asynchronously writes data to a file, replacing the file if it already exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `ArrayBufferView` | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2647
