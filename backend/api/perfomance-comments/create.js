let {merge} = require('ramda')
let db = require('../../db')
let router = require('../../router')
let {PerfomanceComment} = require('../../../common/types/PerfomanceComment')
let UUID = require('node-uuid')

router.post('/api/perfomanceComments', function* (next) {

    let {body: perfomanceCommentForm} = this.request

    let perfomanceComment = merge(perfomanceCommentForm, {
        id: UUID.v4,
        createdOn: new Date(),
        editedOn: 0
    })
    perfomanceComment = {perfomanceComment.id: perfomanceComment}
    db.perfomanceComments = Object.assign(perfomanceComment , db.perfomanceComments)

    this.response.status = 201
    this.response.body = {
        data: perfomanceComment
    }
    yield next
})

module.exports = router