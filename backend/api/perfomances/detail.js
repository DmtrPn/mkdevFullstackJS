let router = require('../../router')
let db = require('../../db')

router.get('/api/perfomances/:id([0-9]{3,})', function* (next) {

    let {params} = this.request

    let currentPerfomance = db.perfomances[params.id]

    if (currentPerfomance) {
        this.response.status = 200
        this.response.body = {
            data: currentPerfomance
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router