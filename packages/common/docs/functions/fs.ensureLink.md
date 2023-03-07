# Function: ensureLink

[fs](../modules/fs.md).ensureLink

▸ **ensureLink**(`src`, `dest`): `Promise`<`void`\>

Ensures that the link exists. If the directory structure does not exist, it is created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const srcPath = '/tmp/file.txt'
const destPath = '/tmp/this/path/does/not/exist/file.txt'

// With a callback:
fs.ensureLink(srcPath, destPath, err => {
  console.log(err) // => null
  // link has now been created, including the directory it is to be placed in
})

// With Promises:
fs.ensureLink(srcPath, destPath)
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.ensureLink(srcPath, destPath)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

asyncAwait()
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:272

▸ **ensureLink**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:273
