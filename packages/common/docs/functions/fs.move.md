# Function: move

[fs](../modules/fs.md).move

▸ **move**(`src`, `dest`, `options?`): `Promise`<`void`\>

Moves a file or directory, even across devices.

**`Example`**

import * as fs from 'fs-extra'

const src = '/tmp/file.txt'
const dest = '/tmp/this/path/does/not/exist/file.txt'

// With a callback:
fs.move(src, dest, err => {
  if (err) return console.error(err)
  console.log('success!')
})

// With Promises:
fs.move(src, dest)
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.move(src, dest)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

asyncAwait()

// Using `overwrite` option
fs.move('/tmp/somedir', '/tmp/may/already/exist/somedir', { overwrite: true }, err => {
  if (err) return console.error(err)
  console.log('success!')
})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` | - |
| `dest` | `string` | Note: When `src` is a file, `dest` must be a file and when `src` is a directory, `dest` must be a directory. |
| `options?` | [`MoveOptions`](../interfaces/fs.MoveOptions.md) | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:157

▸ **move**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | [`NoParamCallbackWithUndefined`](../types/fs.NoParamCallbackWithUndefined.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:158

▸ **move**(`src`, `dest`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options` | [`MoveOptions`](../interfaces/fs.MoveOptions.md) |
| `callback` | [`NoParamCallbackWithUndefined`](../types/fs.NoParamCallbackWithUndefined.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:159
