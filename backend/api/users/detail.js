let router = require('../../router')
let db = require('../../db')

router.get('/api/users/:id([0-9]{3,})', function* (next) {

    let {params} = this.request

    let currentUser = db.users[params.id]

    if (currentUser) {
        this.response.status = 200
        this.response.body = {
            data: currentUser
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router