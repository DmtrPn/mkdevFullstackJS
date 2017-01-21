let router = require('../../router')
let db = require('../../db')
let {find} = require('ramda')

router.get('/api/perfomances/:id([0-9]{3,})', function* (next) {

    let {params} = this.request

    let currentPerfomance = find(p => p.id == params.id, db.perfomances)

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