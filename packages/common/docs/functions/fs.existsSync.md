# Function: existsSync

[fs](../modules/fs.md).existsSync

▸ **existsSync**(`path`): `boolean`

Returns `true` if the path exists, `false` otherwise.

For detailed information, see the documentation of the asynchronous version of
this API: [exists](fs.exists.md).

`fs.exists()` is deprecated, but `fs.existsSync()` is not. The `callback`parameter to `fs.exists()` accepts parameters that are inconsistent with other
Node.js callbacks. `fs.existsSync()` does not use a callback.

```js
import { existsSync } from 'fs';

if (existsSync('/etc/passwd'))
  console.log('The path exists.');
```

**`Since`**

v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:3245
