module.exports = function (opts = {}) {
  return function* responseTime(next) {
    let start = new Date
    yield next
    let resTime = new Date - start
    console.log('%s %s %s %sms',
      this.method,
      this.originalUrl,
      this.status,
      resTime)
  }
}
