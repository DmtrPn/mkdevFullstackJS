let router = require('../../router')
let db = require('../../db')

router.patch('/api/perfomanceComment/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let index = db.perfomanceComments.update(params, form)

    if (index) {
        this.response.status = 201
        this.response.body = {
            data: db.perfomanceComments[index]
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router