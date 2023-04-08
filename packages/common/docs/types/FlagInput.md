# Type alias: FlagInput<T\>

Ƭ **FlagInput**<`T`\>: { [P in keyof T]: CompletableFlag<T[P]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FlagOutput` = { `[flag: string]`: `any`;  } |

#### Defined in

node_modules/@oclif/core/lib/interfaces/parser.d.ts:361
