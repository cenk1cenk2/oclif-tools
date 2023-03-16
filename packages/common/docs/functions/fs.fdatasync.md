# Function: fdatasync

[fs](../modules/fs.md).fdatasync

▸ **fdatasync**(`fd`): `Promise`<`void`\>

Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:3680

▸ **fdatasync**(`fd`, `callback`): `void`

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX [`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details. No arguments other
than a possible
exception are given to the completion callback.

**`Since`**

v0.1.96

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3674
