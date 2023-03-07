# Function: moveSync

[fs](../modules/fs.md).moveSync

▸ **moveSync**(`src`, `dest`, `options?`): `void`

Moves a file or directory, even across devices.

**`Example`**

import * as fs from 'fs-extra'

fs.moveSync('/tmp/somefile', '/tmp/does/not/exist/yet/somefile')

// Using `overwrite` option
fs.moveSync('/tmp/somedir', '/tmp/may/already/exist/somedir', { overwrite: true })

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` | - |
| `dest` | `string` | Note: When `src` is a file, `dest` must be a file and when `src` is a directory, `dest` must be a directory. |
| `options?` | [`MoveOptions`](../interfaces/fs.MoveOptions.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:173
