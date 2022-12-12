# Interface: RmOptions

[fs](../modules/fs.md).RmOptions

## Properties

### force

• `Optional` **force**: `boolean`

When `true`, exceptions will be ignored if `path` does not exist.

**`Default`**

false

#### Defined in

node_modules/@types/node/fs.d.ts:1443

___

### maxRetries

• `Optional` **maxRetries**: `number`

If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
`EPERM` error is encountered, Node.js will retry the operation with a linear
backoff wait of `retryDelay` ms longer on each try. This option represents the
number of retries. This option is ignored if the `recursive` option is not
`true`.

**`Default`**

0

#### Defined in

node_modules/@types/node/fs.d.ts:1452

___

### recursive

• `Optional` **recursive**: `boolean`

If `true`, perform a recursive directory removal. In
recursive mode, operations are retried on failure.

**`Default`**

false

#### Defined in

node_modules/@types/node/fs.d.ts:1458

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`Default`**

100

#### Defined in

node_modules/@types/node/fs.d.ts:1464
