let router = require('../../router')
let db = require('../../db')

router.get('/api/perfomanceComments', function* (next) {

    let {params} = this.request

    this.response.status = 201
    this.response.body = db.perfomanceComments

    yield next;
})

module.exports = router