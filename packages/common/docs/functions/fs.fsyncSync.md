# Function: fsyncSync

[fs](../modules/fs.md).fsyncSync

▸ **fsyncSync**(`fd`): `void`

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail. Returns `undefined`.

**`Since`**

v0.1.96

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2200
