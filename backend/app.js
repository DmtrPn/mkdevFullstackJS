let Koa = require('koa')
let Router = require('koa-router')
let KoaMount = require('koa-mount')
let KoaStatic = require('koa-static')
let perfomances = require('./perfomances.js')
let Errors = require('./middlewares/errors.js')
let Logging = require('./middlewares/logging.js')

let app = new Koa()
let router = new Router()

require('./api/perfomance-comments/create')
require('./api/perfomance-comments/detail')
require('./api/perfomance-comments/edit')
require('./api/perfomance-comments/index')

require('./api/perfomances/create')
require('./api/perfomances/detail')
require('./api/perfomances/edit')
require('./api/perfomances/index')

require('./api/users/create')
require('./api/users/detail')
require('./api/users/edit')
require('./api/users/index')

app.use(Logging())
app.use(Errors())

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
