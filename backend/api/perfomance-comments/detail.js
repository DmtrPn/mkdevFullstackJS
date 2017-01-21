let router = require('../../router')
let db = require('../../db')
let {find} = require('ramda')

router.get('/api/perfomanceComments/:id([0-9]{3,})', function* (next) {

    let {params} = this.request

    let currentComment = find(p => p.id == params.id, db.perfomanceComments)

    if (currentComment) {
        this.response.status = 200
        this.response.body = {
            data: currentComment
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router