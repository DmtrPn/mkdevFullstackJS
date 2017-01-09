var Koa = require('koa')
var Router = require('koa-router')
var app = new Koa()
var router = new Router()

router
  .get('/', function *(next){
    this.body = 'main page'
  })
  .get('/perfomances', function *() {
    this.body = 'Perfomances'
  })
  .get('/perfomances/detail', function *() {
    this.body = 'Perfomance detail'
  })
  .get('/perfomances/new', function *() {
    this.body = 'new Perfomances'
  })
  .get('/users', function *() {
    this.body = 'Users'
  })
  .get('/users/detail', function *() {
    this.body = 'User detail'
  })
  .get('/user/new', function *() {
    this.body = 'new User'
  })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
