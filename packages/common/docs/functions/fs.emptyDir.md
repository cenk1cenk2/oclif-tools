# Function: emptyDir

[fs](../modules/fs.md).emptyDir

▸ **emptyDir**(`path`): `Promise`<`void`\>

Ensures that a directory is empty. Deletes directory contents if the directory is not empty.
If the directory does not exist, it is created. The directory itself is not deleted.

**`Example`**

```ts
import * as fs from 'fs-extra'

// assume this directory has a lot of files and folders
// With a callback:
fs.emptyDir('/tmp/some/dir', err => {
  if (err) return console.error(err)
  console.log('success!')
})

// With Promises:
fs.emptyDir('/tmp/some/dir')
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.emptyDir('/tmp/some/dir')
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
| `path` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:842

▸ **emptyDir**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:843
