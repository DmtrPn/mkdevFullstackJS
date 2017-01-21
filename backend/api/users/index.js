let router = require('../../router')
let db = require('../../db')

router.get('/api/users', function* (next) {

    let {params} = this.request

    this.response.status = 201
    this.response.body = db.users

    yield next;
})

module.exports = router