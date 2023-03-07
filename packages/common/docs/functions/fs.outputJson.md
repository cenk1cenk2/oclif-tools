# Function: outputJson

[fs](../modules/fs.md).outputJson

▸ **outputJson**(`file`, `data`, `options?`): `Promise`<`void`\>

Almost the same as `writeJson`, except that if the directory does not exist, it's created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const file = '/tmp/this/path/does/not/exist/file.json'

// With a callback:
fs.outputJson(file, {name: 'JP'}, err => {
  console.log(err) // => null

  fs.readJson(file, (err, data) => {
    if (err) return console.error(err)
    console.log(data.name) // => JP
  })
})

// With Promises:
fs.outputJson(file, {name: 'JP'})
  .then(() => fs.readJson(file))
  .then(data => {
    console.log(data.name) // => JP
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.outputJson(file, {name: 'JP'})

    const data = await fs.readJson(file)

    console.log(data.name) // => JP
  } catch (err) {
    console.error(err)
  }
}

asyncAwait()
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | [`JsonOutputOptions`](../types/fs.JsonOutputOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:728

▸ **outputJson**(`file`, `data`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options` | [`JsonOutputOptions`](../types/fs.JsonOutputOptions.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:729

▸ **outputJson**(`file`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:730
