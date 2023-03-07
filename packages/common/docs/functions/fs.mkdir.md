# Function: mkdir

[fs](../modules/fs.md).mkdir

▸ **mkdir**(`path`, `options`): `Promise`<`string` \| `undefined`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) & { `recursive`: ``true``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`string` \| `undefined`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1575

▸ **mkdir**(`path`, `options?`): `Promise`<`void`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](../types/fs.Mode.md) \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) & { `recursive?`: ``false``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1587

▸ **mkdir**(`path`, `options?`): `Promise`<`string` \| `undefined`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`Mode`](../types/fs.Mode.md) \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`string` \| `undefined`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1602

▸ **mkdir**(`path`, `options`, `callback`): `void`

Asynchronously creates a directory.

The callback is given a possible exception and, if `recursive` is `true`, the
first directory path created, `(err[, path])`.`path` can still be `undefined` when `recursive` is `true`, if no directory was
created.

The optional `options` argument can be an integer specifying `mode` (permission
and sticky bits), or an object with a `mode` property and a `recursive`property indicating whether parent directories should be created. Calling`fs.mkdir()` when `path` is a directory that
exists results in an error only
when `recursive` is false.

```js
import { mkdir } from 'fs';

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
mkdir('/tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
});
```

On Windows, using `fs.mkdir()` on the root directory even with recursion will
result in an error:

```js
import { mkdir } from 'fs';

mkdir('/', { recursive: true }, (err) => {
  // => [Error: EPERM: operation not permitted, mkdir 'C:\']
});
```

See the POSIX [`mkdir(2)`](http://man7.org/linux/man-pages/man2/mkdir.2.html) documentation for more details.

**`Since`**

v0.1.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) & { `recursive`: ``true``  } |
| `callback` | (`err`: `ErrnoException`, `path?`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1532

▸ **mkdir**(`path`, `options`, `callback`): `void`

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`Mode`](../types/fs.Mode.md) \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) & { `recursive?`: ``false``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1545

▸ **mkdir**(`path`, `options`, `callback`): `void`

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`Mode`](../types/fs.Mode.md) \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |
| `callback` | (`err`: `ErrnoException`, `path?`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1562

▸ **mkdir**(`path`, `callback`): `void`

Asynchronous mkdir(2) - create a directory with a mode of `0o777`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1567
