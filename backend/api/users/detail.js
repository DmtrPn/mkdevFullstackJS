let router = require('../../router')
let db = require('../../db')
let {find} = require('ramda')

router.get('/api/users/:id([0-9]{3,})', function* (next) {

    let {params} = this.request

    let currentUser = find(u => u.id == params.id, db.users)

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