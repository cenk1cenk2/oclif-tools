# Function: appendFile

[fs](../modules/fs.md).appendFile

▸ **appendFile**(`file`, `data`, `options?`): `Promise`<`void`\>

Asynchronously append data to a file, creating the file if it does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `Uint8Array` | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
| `options?` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2748

▸ **appendFile**(`path`, `data`, `options`, `callback`): `void`

Asynchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a `Buffer`.

The `mode` option only affects the newly created file. See [open](fs.open.md) for more details.

```js
import { appendFile } from 'fs';

appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```

If `options` is a string, then it specifies the encoding:

```js
import { appendFile } from 'fs';

appendFile('message.txt', 'data to append', 'utf8', callback);
```

The `path` may be specified as a numeric file descriptor that has been opened
for appending (using `fs.open()` or `fs.openSync()`). The file descriptor will
not be closed automatically.

```js
import { open, close, appendFile } from 'fs';

function closeFd(fd) {
  close(fd, (err) => {
    if (err) throw err;
  });
}

open('message.txt', 'a', (err, fd) => {
  if (err) throw err;

  try {
    appendFile(fd, 'data to append', 'utf8', (err) => {
      closeFd(fd);
      if (err) throw err;
    });
  } catch (err) {
    closeFd(fd);
    throw err;
  }
});
```

**`Since`**

v0.6.7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | filename or file descriptor |
| `data` | `string` \| `Uint8Array` | - |
| `options` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) | - |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2727

▸ **appendFile**(`file`, `data`, `callback`): `void`

Asynchronously append data to a file, creating the file if it does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `Uint8Array` | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2734
