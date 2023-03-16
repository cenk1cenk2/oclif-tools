# Function: mkdirSync

[fs](../modules/fs.md).mkdirSync

▸ **mkdirSync**(`path`, `options`): `string` \| `undefined`

Synchronously creates a directory. Returns `undefined`, or if `recursive` is`true`, the first directory path created.
This is the synchronous version of [mkdir](fs.mkdir.md).

See the POSIX [`mkdir(2)`](http://man7.org/linux/man-pages/man2/mkdir.2.html) documentation for more details.

**`Since`**

v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) & { `recursive`: ``true``  } |

#### Returns

`string` \| `undefined`

#### Defined in

node_modules/@types/node/fs.d.ts:1711

▸ **mkdirSync**(`path`, `options?`): `void`

Synchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](../types/fs.Mode.md) \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) & { `recursive?`: ``false``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1723

▸ **mkdirSync**(`path`, `options?`): `string` \| `undefined`

Synchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](../types/fs.Mode.md) \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`string` \| `undefined`

#### Defined in

node_modules/@types/node/fs.d.ts:1738
