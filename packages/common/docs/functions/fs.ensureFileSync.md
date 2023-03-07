# Function: ensureFileSync

[fs](../modules/fs.md).ensureFileSync

▸ **ensureFileSync**(`file`): `void`

Ensures that the file exists. If the file that is requested to be created is in
directories that do not exist, these directories are created. If the file already
exists, it is **NOT MODIFIED**.

**`Example`**

```ts
import * as fs from 'fs-extra'

const file = '/tmp/this/path/does/not/exist/file.txt'
fs.ensureFileSync(file)
// file has now been created, including the directory it is to be placed in
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:230
