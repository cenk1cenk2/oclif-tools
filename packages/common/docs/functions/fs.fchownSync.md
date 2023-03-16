# Function: fchownSync

[fs](../modules/fs.md).fchownSync

▸ **fchownSync**(`fd`, `uid`, `gid`): `void`

Sets the owner of the file. Returns `undefined`.

See the POSIX [`fchown(2)`](http://man7.org/linux/man-pages/man2/fchown.2.html) documentation for more detail.

**`Since`**

v0.4.7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | - |
| `uid` | `number` | The file's new owner's user id. |
| `gid` | `number` | The file's new group's group id. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:717
