# Function: readJsonSync

[fs](../modules/fs.md).readJsonSync

▸ **readJsonSync**(`file`, `options?`): `any`

Reads a JSON file and then parses it into an object.

**`Example`**

import * as fs from 'fs-extra'

const packageObj = fs.readJsonSync('./package.json')
console.log(packageObj.version) // => 2.0.0

// `readJsonSync()` can take a `throws` option set to `false` and it won't throw if the JSON is invalid. Example:
const file = '/tmp/some-invalid.json'
const data = '{not valid JSON'
fs.writeFileSync(file, data)

const obj = fs.readJsonSync(file, { throws: false })
console.log(obj) // => null

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Path` |
| `options?` | [`JsonReadOptions`](../types/fs.JsonReadOptions.md) |

#### Returns

`any`

#### Defined in

node_modules/@types/jsonfile/index.d.ts:66
