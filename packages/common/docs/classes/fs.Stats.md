# Class: Stats

[fs](../modules/fs.md).Stats

A `fs.Stats` object provides information about a file.

Objects returned from [stat](../functions/fs.stat.md), [lstat](../functions/fs.lstat.md) and [fstat](../functions/fs.fstat.md) and
their synchronous counterparts are of this type.
If `bigint` in the `options` passed to those methods is true, the numeric values
will be `bigint` instead of `number`, and the object will contain additional
nanosecond-precision properties suffixed with `Ns`.

```console
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

`bigint` version:

```console
BigIntStats {
  dev: 2114n,
  ino: 48064969n,
  mode: 33188n,
  nlink: 1n,
  uid: 85n,
  gid: 100n,
  rdev: 0n,
  size: 527n,
  blksize: 4096n,
  blocks: 8n,
  atimeMs: 1318289051000n,
  mtimeMs: 1318289051000n,
  ctimeMs: 1318289051000n,
  birthtimeMs: 1318289051000n,
  atimeNs: 1318289051000000000n,
  mtimeNs: 1318289051000000000n,
  ctimeNs: 1318289051000000000n,
  birthtimeNs: 1318289051000000000n,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

**`Since`**

v0.1.21

## Hierarchy

- [`StatsBase`](../interfaces/fs.StatsBase.md)<`number`\>

  ↳ **`Stats`**

## Constructors

### constructor

• **new Stats**()

#### Inherited from

StatsBase<number\>.constructor

## Methods

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[isFile](../interfaces/fs.StatsBase.md#isfile)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:46

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[isDirectory](../interfaces/fs.StatsBase.md#isdirectory)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:47

___

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[isBlockDevice](../interfaces/fs.StatsBase.md#isblockdevice)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:48

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[isCharacterDevice](../interfaces/fs.StatsBase.md#ischaracterdevice)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:49

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[isSymbolicLink](../interfaces/fs.StatsBase.md#issymboliclink)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:50

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[isFIFO](../interfaces/fs.StatsBase.md#isfifo)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:51

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[isSocket](../interfaces/fs.StatsBase.md#issocket)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:52

## Properties

### dev

• **dev**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[dev](../interfaces/fs.StatsBase.md#dev)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:53

___

### ino

• **ino**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[ino](../interfaces/fs.StatsBase.md#ino)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:54

___

### mode

• **mode**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[mode](../interfaces/fs.StatsBase.md#mode)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:55

___

### nlink

• **nlink**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[nlink](../interfaces/fs.StatsBase.md#nlink)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:56

___

### uid

• **uid**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[uid](../interfaces/fs.StatsBase.md#uid)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:57

___

### gid

• **gid**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[gid](../interfaces/fs.StatsBase.md#gid)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:58

___

### rdev

• **rdev**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[rdev](../interfaces/fs.StatsBase.md#rdev)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:59

___

### size

• **size**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[size](../interfaces/fs.StatsBase.md#size)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:60

___

### blksize

• **blksize**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[blksize](../interfaces/fs.StatsBase.md#blksize)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:61

___

### blocks

• **blocks**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[blocks](../interfaces/fs.StatsBase.md#blocks)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:62

___

### atimeMs

• **atimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[atimeMs](../interfaces/fs.StatsBase.md#atimems)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:63

___

### mtimeMs

• **mtimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[mtimeMs](../interfaces/fs.StatsBase.md#mtimems)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:64

___

### ctimeMs

• **ctimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[ctimeMs](../interfaces/fs.StatsBase.md#ctimems)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:65

___

### birthtimeMs

• **birthtimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[birthtimeMs](../interfaces/fs.StatsBase.md#birthtimems)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:66

___

### atime

• **atime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[atime](../interfaces/fs.StatsBase.md#atime)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:67

___

### mtime

• **mtime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[mtime](../interfaces/fs.StatsBase.md#mtime)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:68

___

### ctime

• **ctime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[ctime](../interfaces/fs.StatsBase.md#ctime)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:69

___

### birthtime

• **birthtime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.StatsBase.md).[birthtime](../interfaces/fs.StatsBase.md#birthtime)

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:70
