let {merge} = require('ramda')
let db = require('../../db')
let router = require('../../router')
let {User} = require('../../../common/types/User')
let UUID = require('node-uuid')

router.post('/api/users/:role', function* (next) {
    let {params, body: userForm} = this.request

    let user = merge(userForm, {
        id: UUID.v4,
        role: params.role,
        userName: this.request.body.userName,
        inclusionDate: new Date(),
        exclusionDate: 0,
        countOfPerfomance: 0

    })

    db.users.push(user)

    this.response.status = 201
    this.response.body = {
        data: user
    }
    yield next
})

module.exports = router