# Function: symlink

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).symlink

▸ **symlink**(`target`, `path`, `type?`): `Promise`<`void`\>

Creates a symbolic link.

The `type` argument is only used on Windows platforms and can be one of `'dir'`,`'file'`, or `'junction'`. Windows junction points require the destination path
to be absolute. When using `'junction'`, the `target` argument will
automatically be normalized to absolute path.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](../types/fs.PathLike.md) |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `type?` | `string` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:692
