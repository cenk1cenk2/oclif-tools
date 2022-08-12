# Function: linkSync

[fs](../modules/fs.md).linkSync

▸ **linkSync**(`existingPath`, `newPath`): `void`

Creates a new link from the `existingPath` to the `newPath`. See the POSIX [`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail. Returns `undefined`.

**`Since`**

v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | [`PathLike`](../types/fs.PathLike.md) |
| `newPath` | [`PathLike`](../types/fs.PathLike.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1108
