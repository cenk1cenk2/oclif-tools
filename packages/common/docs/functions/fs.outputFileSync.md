# Function: outputFileSync

[fs](../modules/fs.md).outputFileSync

▸ **outputFileSync**(`file`, `data`, `options?`): `void`

Almost the same as `writeFileSync` (i.e. it overwrites), except that if the parent directory
does not exist, it's created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const file = '/tmp/this/path/does/not/exist/file.txt'
fs.outputFileSync(file, 'hello!')

const data = fs.readFileSync(file, 'utf8')
console.log(data) // => hello!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `ArrayBufferView` |
| `options?` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:538
