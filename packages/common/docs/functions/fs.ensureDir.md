# Function: ensureDir

[fs](../modules/fs.md).ensureDir

▸ **ensureDir**(`path`, `options?`): `Promise`<`void`\>

Ensures that the directory exists. If the directory structure does not exist, it is created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const dir = '/tmp/this/path/does/not/exist'
const desiredMode = 0o2775
const options = {
  mode: 0o2775
}

// With a callback:
fs.ensureDir(dir, err => {
  console.log(err) // => null
  // dir has now been created, including the directory it is to be placed in
})

// With a callback and a mode integer
fs.ensureDir(dir, desiredMode, err => {
  console.log(err) // => null
  // dir has now been created with mode 0o2775, including the directory it is to be placed in
})

// With Promises:
fs.ensureDir(dir)
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With Promises and a mode integer:
fs.ensureDir(dir, desiredMode)
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.ensureDir(dir)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}
asyncAwait()

// With async/await and an options object, containing mode:
async function asyncAwaitMode () {
  try {
    await fs.ensureDir(dir, options)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}
asyncAwaitMode()
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `number` \| [`EnsureDirOptions`](../interfaces/fs.EnsureDirOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:423

▸ **ensureDir**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:424

▸ **ensureDir**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | `number` \| [`EnsureDirOptions`](../interfaces/fs.EnsureDirOptions.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:425
