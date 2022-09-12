# Type alias: InferredFlags<T\>

Ƭ **InferredFlags**<`T`\>: `T` extends [`FlagInput`](FlagInput.md)<infer F\> ? `F` & { `json`: `boolean` \| `undefined`  } : `unknown`

Infer the flags that are returned by Command.parse. This is useful for when you want to assign the flags as a class property.

**`Example`**

```ts
export type StatusFlags = Interfaces.InferredFlags<typeof Status.flags & typeof Status.globalFlags>

export abstract class BaseCommand extends Command {
  static enableJsonFlag = true

  static globalFlags = {
    config: Flags.string({
      description: 'specify config file',
    }),
  }
}

export default class Status extends BaseCommand {
  static flags = {
    force: Flags.boolean({char: 'f', description: 'a flag'}),
  }

  public flags!: StatusFlags

  public async run(): Promise<StatusFlags> {
    const result = await this.parse(Status)
    this.flags = result.flags
    return result.flags
  }
}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@oclif/core/lib/interfaces/flags.d.ts:32
