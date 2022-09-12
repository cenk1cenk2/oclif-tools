export type DataStore<T extends Record<PropertyKey, any> = Record<PropertyKey, any>> = {
  logo?: string
} & T
