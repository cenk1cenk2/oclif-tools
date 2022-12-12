# Function: opendir

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).opendir

▸ **opendir**(`path`, `options?`): `Promise`<[`Dir`](../classes/fs.Dir.md)\>

Asynchronously open a directory for iterative scanning. See the POSIX [`opendir(3)`](http://man7.org/linux/man-pages/man3/opendir.3.html) documentation for more detail.

Creates an `fs.Dir`, which contains all further functions for reading from
and cleaning up the directory.

The `encoding` option sets the encoding for the `path` while opening the
directory and subsequent read operations.

Example using async iteration:

```js
import { opendir } from 'fs/promises';

try {
  const dir = await opendir('./');
  for await (const dirent of dir)
    console.log(dirent.name);
} catch (err) {
  console.error(err);
}
```

When using the async iterator, the `fs.Dir` object will be automatically
closed after the iterator exits.

**`Since`**

v12.12.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`OpenDirOptions`](../interfaces/fs.OpenDirOptions.md) |

#### Returns

`Promise`<[`Dir`](../classes/fs.Dir.md)\>

Fulfills with an {fs.Dir}.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:1065
