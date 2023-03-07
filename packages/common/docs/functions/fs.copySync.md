# Function: copySync

[fs](../modules/fs.md).copySync

▸ **copySync**(`src`, `dest`, `options?`): `void`

Copy a file or directory. The directory can have contents.

**`Example`**

```ts
import * as fs from 'fs-extra'

// copy file
fs.copySync('/tmp/myfile', '/tmp/mynewfile')

// copy directory, even if it has subdirectories or files
fs.copySync('/tmp/mydir', '/tmp/mynewdir')

// Using filter function
fs.copySync('/tmp/mydir', '/tmp/mynewdir', {
  filter(src, dest) {
    // your logic here
    // it will be copied if return true
  }
})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` | Note that if `src` is a directory it will copy everything inside of this directory, not the entire directory itself (see [issue #537](https://github.com/jprichardson/node-fs-extra/issues/537)). |
| `dest` | `string` | Note that if `src` is a file, `dest` cannot be a directory (see [issue #323](https://github.com/jprichardson/node-fs-extra/issues/323)). |
| `options?` | [`CopyOptionsSync`](../interfaces/fs.CopyOptionsSync.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:111
