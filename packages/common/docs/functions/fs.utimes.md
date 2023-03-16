# Function: utimes

[fs](../modules/fs.md).utimes

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Asynchronously change file timestamps of the file referenced by the supplied path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2149

▸ **utimes**(`path`, `atime`, `mtime`, `callback`): `void`

Change the file system timestamps of the object referenced by `path`.

The `atime` and `mtime` arguments follow these rules:

* Values can be either numbers representing Unix epoch time in seconds,`Date`s, or a numeric string like `'123456789.0'`.
* If the value can not be converted to a number, or is `NaN`, `Infinity` or`-Infinity`, an `Error` will be thrown.

**`Since`**

v0.4.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2141
