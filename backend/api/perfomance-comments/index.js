let router = require('../../router')
let db = require('../../db')

router.get('/api/perfomanceComments', function* (next) {

    if (db.perfomanceComments) {
        this.response.status = 200
        this.response.body = db.perfomanceComments
    } else {
        this.throw(404)
    }

    yield next;
})

module.exports = router