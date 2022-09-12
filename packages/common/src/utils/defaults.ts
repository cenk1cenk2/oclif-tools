import type { ListrContext } from 'listr2'

export function setDefaultsInCtx<T extends ListrContext = ListrContext, K = Record<PropertyKey, any>> (
  ctx: T,
  options: { assign?: { from: K, keys: (keyof K)[] }, default?: Partial<T>[] }
): void {
  options.assign?.keys.forEach((i) => {
    if (options.assign.from[i]) {
      ctx[i as PropertyKey] = options.assign.from[i]
    }
  })

  // defaults
  options.default?.forEach((i) => {
    Object.assign(ctx, i)
  })
}
