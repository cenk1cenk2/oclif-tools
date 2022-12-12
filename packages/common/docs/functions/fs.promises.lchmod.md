# Function: lchmod

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).lchmod

▸ **lchmod**(`path`, `mode`): `Promise`<`void`\>

Changes the permissions on a symbolic link.

This method is only implemented on macOS.

**`Deprecated`**

Since v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `mode` | `Mode` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:775
