let router = require('../../router')
let db = require('../../db')
let {mergeWithKey} = require('ramda')

router.patch('/api/users/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let mergeValues = (key, originValue, newValue) =>
        key != 'id' || k != 'inclusionDate' || k != 'role' ? newValue : originValue

    if (db.users[params.id]) {
        db.users[params.id] = mergeWithKey(mergeValues, db.users[params.id], form)
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