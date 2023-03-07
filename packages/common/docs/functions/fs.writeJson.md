# Function: writeJson

[fs](../modules/fs.md).writeJson

▸ **writeJson**(`file`, `obj`, `options`, `callback`): `void`

Writes an object to a JSON file.

**`Example`**

```ts
import * as fs from 'fs-extra'

// With a callback:
fs.writeJson('./package.json', {name: 'fs-extra'}, err => {
  if (err) return console.error(err)
  console.log('success!')
})

// With Promises:
fs.writeJson('./package.json', {name: 'fs-extra'})
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.writeJson('./package.json', {name: 'fs-extra'})
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
| `file` | `Path` |
| `obj` | `any` |
| `options` | [`JsonWriteOptions`](../types/fs.JsonWriteOptions.md) |
| `callback` | `WriteCallback` |

#### Returns

`void`

#### Defined in

node_modules/@types/jsonfile/index.d.ts:71

▸ **writeJson**(`file`, `obj`, `callback`): `void`

Writes an object to a JSON file.

**`Example`**

```ts
import * as fs from 'fs-extra'

// With a callback:
fs.writeJson('./package.json', {name: 'fs-extra'}, err => {
  if (err) return console.error(err)
  console.log('success!')
})

// With Promises:
fs.writeJson('./package.json', {name: 'fs-extra'})
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.writeJson('./package.json', {name: 'fs-extra'})
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
| `file` | `Path` |
| `obj` | `any` |
| `callback` | `WriteCallback` |

#### Returns

`void`

#### Defined in

node_modules/@types/jsonfile/index.d.ts:72

▸ **writeJson**(`file`, `obj`, `options?`): `Promise`<`void`\>

Writes an object to a JSON file.

**`Example`**

```ts
import * as fs from 'fs-extra'

// With a callback:
fs.writeJson('./package.json', {name: 'fs-extra'}, err => {
  if (err) return console.error(err)
  console.log('success!')
})

// With Promises:
fs.writeJson('./package.json', {name: 'fs-extra'})
  .then(() => {
    console.log('success!')
  })
  .catch(err => {
    console.error(err)
  })

// With async/await:
async function asyncAwait () {
  try {
    await fs.writeJson('./package.json', {name: 'fs-extra'})
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
| `file` | `Path` |
| `obj` | `any` |
| `options?` | [`JsonWriteOptions`](../types/fs.JsonWriteOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/jsonfile/index.d.ts:73
