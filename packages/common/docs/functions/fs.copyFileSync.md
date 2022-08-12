# Function: copyFileSync

[fs](../modules/fs.md).copyFileSync

▸ **copyFileSync**(`src`, `dest`, `mode?`): `void`

Synchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists. Returns `undefined`. Node.js makes no guarantees about the
atomicity of the copy operation. If an error occurs after the destination file
has been opened for writing, Node.js will attempt to remove the destination.

`mode` is an optional integer that specifies the behavior
of the copy operation. It is possible to create a mask consisting of the bitwise
OR of two or more values (e.g.`fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`).

* `fs.constants.COPYFILE_EXCL`: The copy operation will fail if `dest` already
exists.
* `fs.constants.COPYFILE_FICLONE`: The copy operation will attempt to create a
copy-on-write reflink. If the platform does not support copy-on-write, then a
fallback copy mechanism is used.
* `fs.constants.COPYFILE_FICLONE_FORCE`: The copy operation will attempt to
create a copy-on-write reflink. If the platform does not support
copy-on-write, then the operation will fail.

```js
import { copyFileSync, constants } from 'fs';

// destination.txt will be created or overwritten by default.
copyFileSync('source.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
copyFileSync('source.txt', 'destination.txt', constants.COPYFILE_EXCL);
```

**`Since`**

v8.5.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`PathLike`](../types/fs.PathLike.md) | source filename to copy |
| `dest` | [`PathLike`](../types/fs.PathLike.md) | destination filename of the copy operation |
| `mode?` | `number` | modifiers for copy operation. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3666
