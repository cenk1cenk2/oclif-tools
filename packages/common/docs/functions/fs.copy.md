# Function: copy

[fs](../modules/fs.md).copy

▸ **copy**(`src`, `dest`, `options?`): `Promise`<`void`\>

Copy a file or directory. The directory can have contents.

**`Example`**

```ts
import * as fs from 'fs-extra'

// With a callback:
fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
  if (err) return console.error(err)
  console.log('success!')
}) // copies file

fs.copy('/tmp/mydir', '/tmp/mynewdir', err => {
  if (err) return console.error(err)
  console.log('success!')
}) // copies directory, even if it has subdirectories or files

// With Promises:
fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.copy('/tmp/myfile', '/tmp/mynewfile')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

asyncAwait()

// Using filter function
fs.copy(
  '/tmp/mydir',
  '/tmp/mynewdir',
  {
    filter(src, dest) {
      // your logic here
      // it will be copied if return true
    }
  },
  err => {
    if (err) return console.error(err)
    console.log('success!')
  }
)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` | Note that if `src` is a directory it will copy everything inside of this directory, not the entire directory itself (see [issue #537](https://github.com/jprichardson/node-fs-extra/issues/537)). |
| `dest` | `string` | Note that if `src` is a file, `dest` cannot be a directory (see [issue #323](https://github.com/jprichardson/node-fs-extra/issues/323)). |
| `options?` | [`CopyOptions`](../interfaces/fs.CopyOptions.md) | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:83

▸ **copy**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | [`NoParamCallbackWithUndefined`](../types/fs.NoParamCallbackWithUndefined.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:84

▸ **copy**(`src`, `dest`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options` | [`CopyOptions`](../interfaces/fs.CopyOptions.md) |
| `callback` | [`NoParamCallbackWithUndefined`](../types/fs.NoParamCallbackWithUndefined.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:85
