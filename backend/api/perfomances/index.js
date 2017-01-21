let router = require('../../router')
let db = require('../../db')

router.get('/api/perfomances', function* (next) {

    let {params} = this.request

    this.response.status = 201
    this.response.body = db.perfomances

    yield next;
})

module.exports = router