import type { ListrContext } from 'listr2'

export type SetCtxDefaultsOptions<T extends ListrContext = ListrContext> = Partial<T>
export interface SetCtxAssignOptions<K = Record<PropertyKey, any>> {
  from: K
  keys: (keyof K)[]
}

export function setCtxDefaults<T extends ListrContext = ListrContext> (ctx: T, ...defaults: SetCtxDefaultsOptions<T>[]): void {
  // defaults
  defaults?.forEach((i) => {
    if (typeof i === 'object' && !Array.isArray(i)) {
      Object.assign(ctx, i)
    }
  })
}

export function setCtxAssign<T extends ListrContext = ListrContext, K = Record<PropertyKey, any>> (ctx: T, ...assigns: SetCtxAssignOptions<K>[]): void {
  assigns.forEach((assign) => {
    assign?.keys.forEach((i) => {
      if (assign.from[i]) {
        ctx[i as PropertyKey] = assign.from[i]
      }
    })
  })
}
