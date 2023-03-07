# Function: writeJsonSync

[fs](../modules/fs.md).writeJsonSync

▸ **writeJsonSync**(`file`, `obj`, `options?`): `void`

Writes an object to a JSON file.

**`Example`**

```ts
import * as fs from 'fs-extra'

fs.writeJsonSync('./package.json', {name: 'fs-extra'})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Path` |
| `obj` | `any` |
| `options?` | [`JsonWriteOptions`](../types/fs.JsonWriteOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/jsonfile/index.d.ts:78
