# Function: link

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).link

▸ **link**(`existingPath`, `newPath`): `Promise`<`void`\>

Creates a new link from the `existingPath` to the `newPath`. See the POSIX [`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | [`PathLike`](../types/fs.PathLike.md) |
| `newPath` | [`PathLike`](../types/fs.PathLike.md) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:729
