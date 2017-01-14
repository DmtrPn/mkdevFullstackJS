let Koa = require('koa')
let Router = require('koa-router')
let KoaMount = require('koa-mount')
let KoaStatic = require('koa-static')
let perfomances = require('./perfomances.js')
let errors = require('./middlewares/errors.js')
let logging = require('./middlewares/logging.js')

let app = new Koa()
let router = new Router()

app.use(logging({}))
app.use(errors({}))

app.use(function* (next) {
  yield next
  if (!this.response.body) {
    this.throw(404)
  }
})

app.use(perfomances.routes())
app.use(router.allowedMethods())
app.use(KoaMount('/', KoaStatic('../public')))

module.exports = app
