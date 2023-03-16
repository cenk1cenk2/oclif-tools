# Function: copyFile

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).copyFile

▸ **copyFile**(`src`, `dest`, `mode?`): `Promise`<`void`\>

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists.

No guarantees are made about the atomicity of the copy operation. If an
error occurs after the destination file has been opened for writing, an attempt
will be made to remove the destination.

```js
import { constants } from 'fs';
import { copyFile } from 'fs/promises';

try {
  await copyFile('source.txt', 'destination.txt');
  console.log('source.txt was copied to destination.txt');
} catch {
  console.log('The file could not be copied');
}

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
try {
  await copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL);
  console.log('source.txt was copied to destination.txt');
} catch {
  console.log('The file could not be copied');
}
```

**`Since`**

v10.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`PathLike`](../types/fs.PathLike.md) | source filename to copy |
| `dest` | [`PathLike`](../types/fs.PathLike.md) | destination filename of the copy operation |
| `mode?` | `number` | Optional modifiers that specify the behavior of the copy operation. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. `fs.constants.COPYFILE_EXCL \| fs.constants.COPYFILE_FICLONE`) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:524
