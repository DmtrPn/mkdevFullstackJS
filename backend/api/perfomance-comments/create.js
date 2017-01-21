let {merge} = require('ramda')
let db = require('../../db')
let router = require('../../router')
let {PerfomanceComment} = require('../../../common/types/PerfomanceComment')
let UUID = require('node-uuid')

router.post('/api/perfomanceComments', function* (next) {
    let {body: perfomanceCommentForm} = this.request

    let perfomanceComment = merge(perfomanceCommentForm, {
        id: UUID.v4,
        perfomanceId: this.request.body.perfomanceId,
        fromUserId: this.request.body.fromUserId,
        toUserId: this.request.body.toUserId,
        text: this.request.body.text,
        createdIn: new Date(),
        editedOn: 0
    })

    db.perfomanceComments.push(perfomanceComment)

    this.response.status = 201
    this.response.body = {
        data: perfomanceComment
    }
    yield next
})

module.exports = router