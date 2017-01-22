let router = require('../../router')
let db = require('../../db')
let {mergeWithKey} = require('ramda')

router.patch('/api/perfomanceComments/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let mergeValues = (key, originValue, newValue) => key == 'text' || k == 'editedOn' ? newValue : originValue

    if (db.perfomanceComments[params.id]) {
        db.perfomanceComments[params.id] = mergeWithKey(mergeValues, db.perfomanceComments[params.id], form)
        this.response.status = 200
        this.response.body = {
            data: form
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router