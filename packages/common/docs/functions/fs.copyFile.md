# Function: copyFile

[fs](../modules/fs.md).copyFile

▸ **copyFile**(`src`, `dst`, `mode?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`PathLike`](../types/fs.PathLike.md) |
| `dst` | [`PathLike`](../types/fs.PathLike.md) |
| `mode?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:3730

▸ **copyFile**(`src`, `dest`, `callback`): `void`

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists. No arguments other than a possible exception are given to the
callback function. Node.js makes no guarantees about the atomicity of the copy
operation. If an error occurs after the destination file has been opened for
writing, Node.js will attempt to remove the destination.

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
import { copyFile, constants } from 'fs';

function callback(err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
}

// destination.txt will be created or overwritten by default.
copyFile('source.txt', 'destination.txt', callback);

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL, callback);
```

**`Since`**

v8.5.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`PathLike`](../types/fs.PathLike.md) | source filename to copy |
| `dest` | [`PathLike`](../types/fs.PathLike.md) | destination filename of the copy operation |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3727

▸ **copyFile**(`src`, `dest`, `mode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`PathLike`](../types/fs.PathLike.md) |
| `dest` | [`PathLike`](../types/fs.PathLike.md) |
| `mode` | `number` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3728
