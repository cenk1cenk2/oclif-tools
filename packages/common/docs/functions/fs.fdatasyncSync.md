# Function: fdatasyncSync

[fs](../modules/fs.md).fdatasyncSync

▸ **fdatasyncSync**(`fd`): `void`

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX [`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details. Returns `undefined`.

**`Since`**

v0.1.96

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3587
