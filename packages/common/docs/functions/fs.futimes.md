# Function: futimes

[fs](../modules/fs.md).futimes

▸ **futimes**(`fd`, `atime`, `mtime`): `Promise`<`void`\>

Asynchronously change file timestamps of the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2172

▸ **futimes**(`fd`, `atime`, `mtime`, `callback`): `void`

Change the file system timestamps of the object referenced by the supplied file
descriptor. See [utimes](fs.utimes.md).

**`Since`**

v0.4.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2164
