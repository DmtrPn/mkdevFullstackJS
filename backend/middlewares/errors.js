let Http = require('http')
let Fs = require('fs')
let {stderrLogger} = require('../loggers.js')

module.exports = function (opts = {}) {
  return function* errorsMiddleware(next) {
    try {
      yield next
    } catch (err) {
      this.response.status = err.status || 500

      if (this.response.status >= 500) {
        stderrLogger.error('errorsMiddleware', err)
      }

      this.response.body = Fs.readFileSync(`../public/errors/${this.response.status}.html`)
        || Http.STATUS_CODES[this.response.status]
    }
  }
}
