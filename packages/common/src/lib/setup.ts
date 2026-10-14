export async function setup(): Promise<void> {
  // debug port
  const inspect = process.argv.indexOf('--inspect')

  if (inspect !== -1) {
    await import('inspector').then((mod) => mod.open())
    process.argv.splice(inspect, 1)
  }

  // source map support
  const sourceMaps = process.argv.indexOf('--source-map')

  if (sourceMaps !== -1) {
    await import('module').then((mod) => mod.setSourceMapsSupport(true))

    process.argv.splice(sourceMaps, 1)
  }
}
