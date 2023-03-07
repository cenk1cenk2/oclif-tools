# Function: ensureSymlinkSync

[fs](../modules/fs.md).ensureSymlinkSync

▸ **ensureSymlinkSync**(`src`, `dest`, `type?`): `void`

Ensures that the symlink exists. If the directory structure does not exist, it is created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const srcPath = '/tmp/file.txt'
const destPath = '/tmp/this/path/does/not/exist/file.txt'
fs.ensureSymlinkSync(srcPath, destPath)
// symlink has now been created, including the directory it is to be placed in
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` | - |
| `dest` | `string` | - |
| `type?` | `Type` | It is only available on Windows and ignored on other platforms. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:353
