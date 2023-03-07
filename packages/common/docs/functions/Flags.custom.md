# Function: custom

[Flags](../modules/Flags.md).custom

▸ **custom**<`T`, `P`\>(`defaults`): `FlagDefinition`<`T`, `P`\>

Create a custom flag.

**`Example`**

```ts
type Id = string
type IdOpts = { startsWith: string; length: number };

export const myFlag = custom<Id, IdOpts>({
  parse: async (input, opts) => {
    if (input.startsWith(opts.startsWith) && input.length === opts.length) {
      return input
    }

    throw new Error('Invalid id')
  },
})
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | { `parse`: `FlagParser`<`T`, `string`, `P`\> ; `multiple`: ``true``  } & `Partial`<`OptionFlagDefaults`<`T`, `P`, ``true``\>\> |

#### Returns

`FlagDefinition`<`T`, `P`\>

#### Defined in

node_modules/@oclif/core/lib/flags.d.ts:22

▸ **custom**<`T`, `P`\>(`defaults`): `FlagDefinition`<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | { `parse`: `FlagParser`<`T`, `string`, `P`\>  } & `Partial`<`OptionFlagDefaults`<`T`, `P`, ``false``\>\> |

#### Returns

`FlagDefinition`<`T`, `P`\>

#### Defined in

node_modules/@oclif/core/lib/flags.d.ts:26

▸ **custom**<`T`, `P`\>(`defaults`): `FlagDefinition`<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` |
| `P` | `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `Partial`<`OptionFlagDefaults`<`T`, `P`, ``false``\>\> |

#### Returns

`FlagDefinition`<`T`, `P`\>

#### Defined in

node_modules/@oclif/core/lib/flags.d.ts:29
