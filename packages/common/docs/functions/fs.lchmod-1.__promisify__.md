# Function: \_\_promisify\_\_

[fs](../modules/fs.md).[lchmod](../modules/fs.lchmod-1.md).__promisify__

▸ **__promisify__**(`path`, `mode`): `Promise`<`void`\>

Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:805
