# Function: mkdtemp

[fs](../modules/fs.md).mkdtemp

▸ **mkdtemp**(`prefix`): `Promise`<`string`\>

Asynchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:496

▸ **mkdtemp**(`prefix`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `callback` | (`err`: `ErrnoException`, `folder`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:497
