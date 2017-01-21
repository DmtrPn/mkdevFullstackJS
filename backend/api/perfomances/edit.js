let router = require('../../router')
let db = require('../../db')
let {findIndex} = require('ramda')

router.patch('/api/perfomances/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let index = findIndex(p => p.id == params.id, db.perfomances)

    if (index >= 0) {
        db.perfomances[index] = form
        this.response.status = 200
        this.response.body = {
            data: db.perfomances[index]
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router