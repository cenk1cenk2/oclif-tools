# Function: ensureLinkSync

[fs](../modules/fs.md).ensureLinkSync

▸ **ensureLinkSync**(`src`, `dest`): `void`

Ensures that the link exists. If the directory structure does not exist, it is created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const srcPath = '/tmp/file.txt'
const destPath = '/tmp/this/path/does/not/exist/file.txt'
fs.ensureLinkSync(srcPath, destPath)
// link has now been created, including the directory it is to be placed in
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:289
