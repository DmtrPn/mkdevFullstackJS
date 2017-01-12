var Koa = require('koa')
var Router = require('koa-router')
//var bodyParse = require('koa-body')
var serve = require('koa-static')('../public')
var app = new Koa()
var router = new Router()

var perfomances = require('./perfomances.js');

app
  .use(serve)
  .use(perfomances.routes())
  .use(router.allowedMethods())

app.listen(8080)
