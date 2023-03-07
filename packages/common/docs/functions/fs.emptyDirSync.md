# Function: emptyDirSync

[fs](../modules/fs.md).emptyDirSync

▸ **emptyDirSync**(`path`): `void`

Ensures that a directory is empty. Deletes directory contents if the directory is not empty.
If the directory does not exist, it is created. The directory itself is not deleted.

**`Example`**

```ts
import * as fs from 'fs-extra'

// assume this directory has a lot of files and folders
fs.emptyDirSync('/tmp/some/dir')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:858
