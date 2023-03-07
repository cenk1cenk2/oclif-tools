# Function: ensureDirSync

[fs](../modules/fs.md).ensureDirSync

▸ **ensureDirSync**(`path`, `options?`): `void`

Ensures that the directory exists. If the directory structure does not exist, it is created.
If provided, options may specify the desired mode for the directory.

**`Example`**

```ts
import * as fs from 'fs-extra'

const dir = '/tmp/this/path/does/not/exist'

const desiredMode = 0o2775
const options = {
  mode: 0o2775
}

fs.ensureDirSync(dir)
// dir has now been created, including the directory it is to be placed in

fs.ensureDirSync(dir, desiredMode)
// dir has now been created, including the directory it is to be placed in with permission 0o2775

fs.ensureDirSync(dir, options)
// dir has now been created, including the directory it is to be placed in with permission 0o2775
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `number` \| [`EnsureDirOptions`](../interfaces/fs.EnsureDirOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:449
