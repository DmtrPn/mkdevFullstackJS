let {merge} = require('ramda')
let db = require('../../db')
let router = require('../../router')
let {User} = require('../../../common/types/User')
let UUID = require('node-uuid')

router.post('/api/users/:role', function* (next) {
    let {params, body: userForm} = this.request

    let id = UUID.v4()

    db.users[id] = merge(userForm, {
        id: id,
        role: params.role,
        inclusionDate: new Date(),
        exclusionDate: 0,
        countOfPerfomance: 0
    })

    this.response.status = 201
    this.response.body = {
        data: db.users[id]
    }
    yield next
})

module.exports = router