import type { DataStore } from './store.interface'

export class StoreService<T extends Record<PropertyKey, any> = Record<PropertyKey, any>> {
  private static instance: StoreService
  private store: DataStore<T> = {} as DataStore<T>

  constructor () {
    if (StoreService.instance) {
      return StoreService.instance
    } else {
      StoreService.instance = this
    }
  }

  public has<K extends keyof DataStore<T>>(key: K): boolean {
    return !!this.store[key]
  }

  public get<K extends keyof DataStore<T>>(key: K): DataStore<T>[K] {
    return this.store[key]
  }

  public set<K extends keyof DataStore<T>>(key: K, data: DataStore<T>[K]): DataStore<T>[K] {
    this.store[key] = data

    return data
  }
}
