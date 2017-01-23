let {merge} = require('ramda')
let db = require('../../db')
let router = require('../../router')
let {PerfomanceComment} = require('../../../common/types/PerfomanceComment')
let UUID = require('node-uuid')

router.post('/api/perfomanceComments', function* (next) {

    let {body: perfomanceCommentForm} = this.request

    let id = UUID.v4()

    db.perfomanceComments[id] = merge(perfomanceCommentForm, {
        id: id,
        createdOn: new Date(),
        editedOn: 0
    })

    this.response.status = 201
    this.response.body = {
        data: db.perfomanceComments[id]
    }
    yield next
})

module.exports = router