let {merge} = require('ramda')
let db = require('../../db')
let router = require('../../router')
let {Perfomance} = require('../../../common/types/Perfomance')
let UUID = require('node-uuid')

router.post('/api/perfomances', function* (next) {
    let {body: perfomanceForm} = this.request

    let id = UUID.v4()

    db.perfomances[id] = merge(perfomanceForm, {
        id: id,
        closingDate: 0,
        visitors: 0,
        rating: 0,
        commentCount: 0
    })

    this.response.status = 201
    this.response.body = {
        data: db.perfomances[id]
    }
    yield next
})

module.exports = router