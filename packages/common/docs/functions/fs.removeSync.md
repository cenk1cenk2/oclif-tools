# Function: removeSync

[fs](../modules/fs.md).removeSync

▸ **removeSync**(`dir`): `void`

Removes a file or directory. The directory can have contents. If the path does not exist, silently does nothing.

**`Example`**

```ts
import * as fs from 'fs-extra'

// remove file
fs.removeSync('/tmp/myfile')

fs.removeSync('/home/jprichardson') // I just deleted my entire HOME directory.
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:805
