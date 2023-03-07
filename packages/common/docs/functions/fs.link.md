# Function: link

[fs](../modules/fs.md).link

▸ **link**(`existingPath`, `newPath`): `Promise`<`void`\>

Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `existingPath` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `newPath` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1102

▸ **link**(`existingPath`, `newPath`, `callback`): `void`

Creates a new link from the `existingPath` to the `newPath`. See the POSIX [`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail. No arguments other than
a possible
exception are given to the completion callback.

**`Since`**

v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | [`PathLike`](../types/fs.PathLike.md) |
| `newPath` | [`PathLike`](../types/fs.PathLike.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1095
