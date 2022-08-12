# Function: pipeProcessToLogger

▸ **pipeProcessToLogger**(`logger`, `instance`, `options?`): `ExecaChildProcess`

Given the instance it will pipe process output through the logger to append prefixes such as the application name.

#### Parameters

| Name       | Type                                                                        |
| :--------- | :-------------------------------------------------------------------------- |
| `logger`   | [`Logger`](../classes/Logger.md)                                            |
| `instance` | `ExecaChildProcess`<`string`\>                                              |
| `options?` | [`PipeProcessToLoggerOptions`](../interfaces/PipeProcessToLoggerOptions.md) |

#### Returns

`ExecaChildProcess`

#### Defined in

packages/common/src/utils/logger/pipe/pipe-process-to-logger.ts:11
