# Function: mkdir

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).mkdir

▸ **mkdir**(`path`, `options`): `Promise`<`string` \| `undefined`\>

Asynchronously creates a directory.

The optional `options` argument can be an integer specifying `mode` (permission
and sticky bits), or an object with a `mode` property and a `recursive`property indicating whether parent directories should be created. Calling`fsPromises.mkdir()` when `path` is a directory
that exists results in a
rejection only when `recursive` is false.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) & { `recursive`: ``true``  } |

#### Returns

`Promise`<`string` \| `undefined`\>

Upon success, fulfills with `undefined` if `recursive` is `false`, or the first directory path created if `recursive` is `true`.

#### Defined in

node_modules/@types/node/ts4.8/fs/promises.d.ts:576

▸ **mkdir**(`path`, `options?`): `Promise`<`void`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `Mode` \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) & { `recursive?`: ``false``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/ts4.8/fs/promises.d.ts:588

▸ **mkdir**(`path`, `options?`): `Promise`<`string` \| `undefined`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) \| `Mode` | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`string` \| `undefined`\>

#### Defined in

node_modules/@types/node/ts4.8/fs/promises.d.ts:603
