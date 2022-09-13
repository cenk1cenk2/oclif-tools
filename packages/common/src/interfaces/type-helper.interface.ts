/**
 * Makes the object deep partial.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
