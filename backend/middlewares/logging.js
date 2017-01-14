let {httpLogger} = require('../loggers')

module.exports = function (opt = {}) {
  return function* loggingMiddleware(next) {

    let start = new Date()

    yield next

    let responseDelay = new Date() - start

    let remoteAddr = this.request.ip
    let userAgent = this.request.headers['user-agent']
    let method = this.method
    let url = this.req.originalUrl || this.request.url
    let httpVersion = this.req.httpVersionMajor + '.' + this.req.httpVersionMinor
    let status = this.response.status
    let contentLength = this.length

    var log = `${method} ${url} ${status} (${contentLength} b, ${responseDelay} ms)`
    var meta = {}

    if (status >= 500) {
      httpLogger.error(log, meta)
    } else if (400 <= status && status <= 500) {
      httpLogger.warn(log, meta)
    } else {
      httpLogger.info(log, meta)
    }
  }
}
