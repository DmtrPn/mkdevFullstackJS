let {httpLogger} = require('../loggers')

module.exports = function () {
  return function* loggingMiddleware(next) {

    let start = new Date()

    yield next

    let remoteAddr = this.request.ip
    let userAgent = this.request.headers['user-agent']
    let httpVersion = this.req.httpVersionMajor + '.' + this.req.httpVersionMinor

    let responseDelay = new Date() - start
    let method = this.method
    let url = this.req.originalUrl || this.request.url
    let status = this.response.status
    let contentLength = this.length
    let log = `${method} ${url} ${status} (${contentLength} b, ${responseDelay} ms)`
    let meta = {remoteAddr: remoteAddr, userAgent: userAgent, httpVersion: httpVersion}

    if (status >= 500) {
      httpLogger.error(log, meta)
    } else if (400 <= status && status < 500) {
      httpLogger.warn(log, meta)
    } else {
      httpLogger.info(log, meta)
    }
  }
}
