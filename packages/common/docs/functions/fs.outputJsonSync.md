# Function: outputJsonSync

[fs](../modules/fs.md).outputJsonSync

▸ **outputJsonSync**(`file`, `data`, `options?`): `void`

Almost the same as `writeJsonSync`, except that if the directory does not exist, it's created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const file = '/tmp/this/path/does/not/exist/file.json'
fs.outputJsonSync(file, {name: 'JP'})

const data = fs.readJsonSync(file)
console.log(data.name) // => JP
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | [`JsonOutputOptions`](../types/fs.JsonOutputOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:747
