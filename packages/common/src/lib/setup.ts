export function setup (): void {
  process.env.SUPPRESS_NO_CONFIG_WARNING = '1'

  // debug port
  const inspect = process.argv.indexOf('--inspect')

  if (inspect !== -1) {
    require('inspector').open()
    process.argv.splice(inspect, 1)
  }

  // log levels, with single variable instead of the config plugin
  const verbose = process.argv.indexOf('--verbose')

  if (verbose !== -1) {
    process.env.LOG_LEVEL = 'verbose'
    process.argv.splice(verbose, 1)
  }

  const debug = process.argv.indexOf('--debug')

  if (debug !== -1) {
    process.env.LOG_LEVEL = 'debug'
    process.argv.splice(debug, 1)
  }

  const trace = process.argv.indexOf('--trace')

  if (trace !== -1) {
    process.env.LOG_LEVEL = 'trace'
    process.argv.splice(trace, 1)
  }

  const silent = process.argv.indexOf('--silent')

  if (silent !== -1) {
    process.env.LOG_LEVEL = 'silent'
    process.argv.splice(silent, 1)
  }

  // source map support
  const sourceMaps = process.argv.indexOf('--source-map')

  if (sourceMaps !== -1) {
    require('source-map-support').install()
    process.argv.splice(sourceMaps, 1)
  }
}
