export function setup (): void {
  // overwrite debug and silent logger and listr through config
  const trace = process.argv.indexOf('--trace')
  const debug = process.argv.indexOf('--debug')
  const silent = process.argv.indexOf('--silent')
  const inspect = process.argv.indexOf('--inspect')
  const sourceMaps = process.argv.indexOf('--source-map')
  const verbose = process.argv.indexOf('--verbose')

  // debug port
  if (inspect !== -1) {
    require('inspector').open()
    process.argv.splice(inspect, 1)
  }

  // log levels, with single variable instead of the config plugin
  if (verbose !== -1) {
    process.env.LOG_LEVEL = 'verbose'
    process.argv.splice(verbose, 1)
  }

  if (debug !== -1) {
    process.env.LOG_LEVEL = 'debug'
    process.argv.splice(debug, 1)
  }

  if (trace !== -1) {
    process.env.LOG_LEVEL = 'trace'
    process.argv.splice(trace, 1)
  }

  if (silent !== -1) {
    process.env.LOG_LEVEL = 'silent'
    process.argv.splice(silent, 1)
  }

  // source map support
  if (sourceMaps !== -1) {
    require('source-map-support').install()
    process.argv.splice(sourceMaps, 1)
  }
}
