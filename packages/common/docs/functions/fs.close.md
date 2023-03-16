# Function: close

[fs](../modules/fs.md).close

▸ **close**(`fd`): `Promise`<`void`\>

Asynchronous close(2) - close a file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2072

▸ **close**(`fd`, `callback?`): `void`

Closes the file descriptor. No arguments other than a possible exception are
given to the completion callback.

Calling `fs.close()` on any file descriptor (`fd`) that is currently in use
through any other `fs` operation may lead to undefined behavior.

See the POSIX [`close(2)`](http://man7.org/linux/man-pages/man2/close.2.html) documentation for more detail.

**`Since`**

v0.0.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback?` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2066
