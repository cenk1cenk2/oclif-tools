# Function: outputFile

[fs](../modules/fs.md).outputFile

▸ **outputFile**(`file`, `data`, `options?`): `Promise`<`void`\>

Almost the same as `writeFile` (i.e. it overwrites), except that if the parent directory
does not exist, it's created.

**`Example`**

```ts
import * as fs from 'fs-extra'

const file = '/tmp/this/path/does/not/exist/file.txt'

// With a callback:
fs.outputFile(file, 'hello!', err => {
  console.log(err) // => null

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return console.error(err)
    console.log(data) // => hello!
  })
})

// With Promises:
fs.outputFile(file, 'hello!')
  .then(() => fs.readFile(file, 'utf8'))
  .then(data => {
    console.log(data) // => hello!
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.outputFile(file, 'hello!')

    const data = await fs.readFile(file, 'utf8')

    console.log(data) // => hello!
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
| `data` | `string` \| `ArrayBufferView` |
| `options?` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:513

▸ **outputFile**(`file`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `ArrayBufferView` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:518

▸ **outputFile**(`file`, `data`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `ArrayBufferView` |
| `options` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:519
