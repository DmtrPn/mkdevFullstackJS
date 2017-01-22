let {merge} = require('ramda')
let db = require('../../db')
let router = require('../../router')
let {Perfomance} = require('../../../common/types/Perfomance')
let UUID = require('node-uuid')

router.post('/api/perfomances', function* (next) {
    let {body: perfomanceForm} = this.request

    let perfomance = merge(perfomanceForm, {
        id: UUID.v4,
        closingDate: 0,
        visitors: 0,
        rating: 0,
        commentCount: 0
    })
    perfomance = {perfomance.id: perfomance}
    db.perfomances = Object.assign(perfomance, db.perfomances)

    this.response.status = 201
    this.response.body = {
        data: perfomance
    }
    yield next
})

module.exports = router