# Function: fchmod

[fs](../modules/fs.md).fchmod

▸ **fchmod**(`fd`, `mode`): `Promise`<`void`\>

Asynchronous fchmod(2) - Change permissions of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `mode` | [`Mode`](../types/fs.Mode.md) | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:779

▸ **fchmod**(`fd`, `mode`, `callback`): `void`

Sets the permissions on the file. No arguments other than a possible exception
are given to the completion callback.

See the POSIX [`fchmod(2)`](http://man7.org/linux/man-pages/man2/fchmod.2.html) documentation for more detail.

**`Since`**

v0.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `mode` | [`Mode`](../types/fs.Mode.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:772
