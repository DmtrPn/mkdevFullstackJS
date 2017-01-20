let {merge} = require('ramda')
let router = require('../../router')
let {Perfomance, PerfomanceForm} = require('../../../common/types/Perfomance')
let UUID = require('node-uuid')

router.post('/api/perfomances', function* (next) {
    let {param, body: perfomanceForm} = this.request

    let perfomance = merge(perfomanceForm, {
        id: UUID.v4,
        title: this.request.body.title,
        description: this.request.body.description,
        actorsCount: this.request.body.actorsCount,
        premiereDate: this.request.body.premiereDate,
        closingDate: 0,
        visitors: 0,
        rating: 0,
        commentCount: 0
    })

    yield this.checkPermissions(user)
    yield this.checkCreateConflicts('perfomances', perfomance)

    // add to DB

    this.response.status = 201
    this.response.body = {
        data: perfomance
    }
    yield next
})