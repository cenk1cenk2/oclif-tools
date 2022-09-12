# Function: utimes

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).utimes

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Change the file system timestamps of the object referenced by `path`.

The `atime` and `mtime` arguments follow these rules:

* Values can be either numbers representing Unix epoch time, `Date`s, or a
numeric string like `'123456789.0'`.
* If the value can not be converted to a number, or is `NaN`, `Infinity` or`-Infinity`, an `Error` will be thrown.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:789
