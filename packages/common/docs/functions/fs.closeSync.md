# Function: closeSync

[fs](../modules/fs.md).closeSync

▸ **closeSync**(`fd`): `void`

Closes the file descriptor. Returns `undefined`.

Calling `fs.closeSync()` on any file descriptor (`fd`) that is currently in use
through any other `fs` operation may lead to undefined behavior.

See the POSIX [`close(2)`](http://man7.org/linux/man-pages/man2/close.2.html) documentation for more detail.

**`Since`**

v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1983
