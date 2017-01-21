let router = require('../../router')
let db = require('../../db')
let {findIndex} = require('ramda')

router.patch('/api/perfomanceComment/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let index = findIndex(p => p.id == params.id, db.perfomanceComments)

    if (index >= 0) {
        db.perfomanceComments[index] = form
        this.response.status = 200
        this.response.body = {
            data: db.perfomanceComments[index]
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router