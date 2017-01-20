let KoaBody = require('koa-body')
let KoaRouter = require('koa-router')

let router = KoaRouter()

router.use(function* (next) {
  this.request.params = this.params
    delete this.params
    return yield next
})

router.use(KoaBody({strict: false}))

module.exports = router