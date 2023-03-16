# Type alias: ArgInput<T\>

Ƭ **ArgInput**<`T`\>: { [P in keyof T]: Arg<T[P]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArgOutput` = { `[arg: string]`: `any`;  } |

#### Defined in

packages/common/node_modules/@oclif/core/lib/interfaces/parser.d.ts:284
