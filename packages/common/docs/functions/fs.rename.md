# Function: rename

[fs](../modules/fs.md).rename

▸ **rename**(`oldPath`, `newPath`): `Promise`<`void`\>

Asynchronous rename(2) - Change the name or location of a file or directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldPath` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `newPath` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:515

▸ **rename**(`oldPath`, `newPath`, `callback`): `void`

Asynchronously rename file at `oldPath` to the pathname provided
as `newPath`. In the case that `newPath` already exists, it will
be overwritten. If there is a directory at `newPath`, an error will
be raised instead. No arguments other than a possible exception are
given to the completion callback.

See also: [`rename(2)`](http://man7.org/linux/man-pages/man2/rename.2.html).

```js
import { rename } from 'fs';

rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
```

**`Since`**

v0.0.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPath` | [`PathLike`](../types/fs.PathLike.md) |
| `newPath` | [`PathLike`](../types/fs.PathLike.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:506
