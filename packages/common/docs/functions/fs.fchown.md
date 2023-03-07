# Function: fchown

[fs](../modules/fs.md).fchown

▸ **fchown**(`fd`, `uid`, `gid`): `Promise`<`void`\>

Asynchronous fchown(2) - Change ownership of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:671

▸ **fchown**(`fd`, `uid`, `gid`, `callback`): `void`

Sets the owner of the file. No arguments other than a possible exception are
given to the completion callback.

See the POSIX [`fchown(2)`](http://man7.org/linux/man-pages/man2/fchown.2.html) documentation for more detail.

**`Since`**

v0.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `uid` | `number` |
| `gid` | `number` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:665
