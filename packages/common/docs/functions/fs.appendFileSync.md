# Function: appendFileSync

[fs](../modules/fs.md).appendFileSync

▸ **appendFileSync**(`path`, `data`, `options?`): `void`

Synchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a `Buffer`.

The `mode` option only affects the newly created file. See [open](fs.open.md) for more details.

```js
import { appendFileSync } from 'fs';

try {
  appendFileSync('message.txt', 'data to append');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  // Handle the error
}
```

If `options` is a string, then it specifies the encoding:

```js
import { appendFileSync } from 'fs';

appendFileSync('message.txt', 'data to append', 'utf8');
```

The `path` may be specified as a numeric file descriptor that has been opened
for appending (using `fs.open()` or `fs.openSync()`). The file descriptor will
not be closed automatically.

```js
import { openSync, closeSync, appendFileSync } from 'fs';

let fd;

try {
  fd = openSync('message.txt', 'a');
  appendFileSync(fd, 'data to append', 'utf8');
} catch (err) {
  // Handle the error
} finally {
  if (fd !== undefined)
    closeSync(fd);
}
```

**`Since`**

v0.6.7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | filename or file descriptor |
| `data` | `string` \| `Uint8Array` | - |
| `options?` | `WriteFileOptions` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2797
