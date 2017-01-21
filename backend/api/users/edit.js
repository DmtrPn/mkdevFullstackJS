let router = require('../../router')
let db = require('../../db')
let {findIndex} = require('ramda')

router.patch('/api/users/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let index = findIndex(u => u.id == params.id, db.users)

    if (index >= 0) {
        db.users[index] = form
        this.response.status = 200
        this.response.body = {
            data: db.users[index]
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router