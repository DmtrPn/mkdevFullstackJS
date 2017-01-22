let router = require('../../router')
let db = require('../../db')

router.get('/api/perfomanceComments/:id([0-9]{3,})', function* (next) {

    let {params} = this.request

    let currentComment = db.perfomanceComments[params.id]

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