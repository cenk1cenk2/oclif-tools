# Function: ftruncate

[fs](../modules/fs.md).ftruncate

▸ **ftruncate**(`fd`, `len?`): `Promise`<`void`\>

Asynchronous ftruncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `len?` | `number` | If not specified, defaults to `0`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:660

▸ **ftruncate**(`fd`, `len?`, `callback`): `void`

Truncates the file descriptor. No arguments other than a possible exception are
given to the completion callback.

See the POSIX [`ftruncate(2)`](http://man7.org/linux/man-pages/man2/ftruncate.2.html) documentation for more detail.

If the file referred to by the file descriptor was larger than `len` bytes, only
the first `len` bytes will be retained in the file.

For example, the following program retains only the first four bytes of the
file:

```js
import { open, close, ftruncate } from 'fs';

function closeFd(fd) {
  close(fd, (err) => {
    if (err) throw err;
  });
}

open('temp.txt', 'r+', (err, fd) => {
  if (err) throw err;

  try {
    ftruncate(fd, 4, (err) => {
      closeFd(fd);
      if (err) throw err;
    });
  } catch (err) {
    closeFd(fd);
    if (err) throw err;
  }
});
```

If the file previously was shorter than `len` bytes, it is extended, and the
extended part is filled with null bytes (`'\0'`):

If `len` is negative then `0` will be used.

**`Since`**

v0.8.6

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `len?` | `number` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:648

▸ **ftruncate**(`fd`, `callback`): `void`

Asynchronous ftruncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:653
