let router = require('../../router')
let db = require('../../db')

router.patch('/api/perfomances/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let index = db.perfomances.update(params, form)

    if (index) {
        this.response.status = 201
        this.response.body = {
            data: db.perfomances[index]
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router