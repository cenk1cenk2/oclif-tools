# Interface: PipeProcessToLoggerOptions

## Properties

### start

• `Optional` **start**: [`LogLevels`](../enums/LogLevels.md)

Will log the command when the process starts.

#### Defined in

packages/common/src/utils/logger/pipe/pipe-process-to-logger.interface.ts:5

___

### end

• `Optional` **end**: [`LogLevels`](../enums/LogLevels.md)

Will log the command when the process ends.

#### Defined in

packages/common/src/utils/logger/pipe/pipe-process-to-logger.interface.ts:7

___

### stdout

• `Optional` **stdout**: [`LogLevels`](../enums/LogLevels.md)

enable/disable stdout

#### Defined in

packages/common/src/utils/logger/pipe/pipe-process-to-logger.interface.ts:9

___

### stderr

• `Optional` **stderr**: [`LogLevels`](../enums/LogLevels.md)

enable/disable stderrr

#### Defined in

packages/common/src/utils/logger/pipe/pipe-process-to-logger.interface.ts:11

___

### callback

• `Optional` **callback**: (`error?`: `Error`) => `void`

#### Type declaration

▸ (`error?`): `void`

will callback on error in the instance

##### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

##### Returns

`void`

#### Defined in

packages/common/src/utils/logger/pipe/pipe-process-to-logger.interface.ts:13
