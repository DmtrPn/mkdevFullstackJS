let Http = require('http')
let Fs = require('fs')

module.exports = function (opts = {}) {
  return function* errorsMiddleware(next) {
    try {
      yield next
    } catch (err) {
      this.response.status = err.status || 500
      this.response.body = Fs.readFileSync(`../public/errors/${this.response.status}.html`)
    }
  }
}
