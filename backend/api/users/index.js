let router = require('../../router')
let db = require('../../db')

router.get('/api/users', function* (next) {

    if (db.users) {
        this.response.status = 200
        this.response.body = db.users
    } else {
        this.throw(404)
    }

    yield next;
})

module.exports = router