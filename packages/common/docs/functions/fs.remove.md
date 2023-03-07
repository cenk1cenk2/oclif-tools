# Function: remove

[fs](../modules/fs.md).remove

▸ **remove**(`dir`): `Promise`<`void`\>

Removes a file or directory. The directory can have contents. If the path does not exist, silently does nothing.

**`Example`**

```ts
import * as fs from 'fs-extra'

// remove file
// With a callback:
fs.remove('/tmp/myfile', err => {
  if (err) return console.error(err)
  console.log('success!')
})

fs.remove('/home/jprichardson', err => {
  if (err) return console.error(err)
  console.log('success!') // I just deleted my entire HOME directory.
})

// With Promises:
fs.remove('/tmp/myfile')
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.remove('/tmp/myfile')
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
| `dir` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:792

▸ **remove**(`dir`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:793
