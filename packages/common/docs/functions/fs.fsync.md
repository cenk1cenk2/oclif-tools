# Function: fsync

[fs](../modules/fs.md).fsync

▸ **fsync**(`fd`): `Promise`<`void`\>

Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2092

▸ **fsync**(`fd`, `callback`): `void`

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail. No arguments other
than a possible exception are given to the completion callback.

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

node_modules/@types/node/fs.d.ts:2086
