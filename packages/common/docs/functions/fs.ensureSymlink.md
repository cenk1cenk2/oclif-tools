# Function: ensureSymlink

[fs](../modules/fs.md).ensureSymlink

▸ **ensureSymlink**(`src`, `dest`, `type?`): `Promise`<`void`\>

Ensures that the symlink exists. If the directory structure does not exist, it is created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const srcPath = '/tmp/file.txt'
const destPath = '/tmp/this/path/does/not/exist/file.txt'

// With a callback:
fs.ensureSymlink(srcPath, destPath, err => {
  console.log(err) // => null
  // symlink has now been created, including the directory it is to be placed in
})

// With Promises:
fs.ensureSymlink(srcPath, destPath)
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.ensureSymlink(srcPath, destPath)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

asyncAwait()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` | - |
| `dest` | `string` | - |
| `type?` | `Type` | It is only available on Windows and ignored on other platforms. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:333

▸ **ensureSymlink**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:334

▸ **ensureSymlink**(`src`, `dest`, `type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `type` | `Type` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:335
