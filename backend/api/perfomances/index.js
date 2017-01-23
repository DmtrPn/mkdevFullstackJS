let router = require('../../router')
let db = require('../../db')

router.get('/api/perfomances', function* (next) {

    if (db.perfomances) {
        this.response.status = 200
        this.response.body = db.perfomances
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router