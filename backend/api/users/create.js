let {merge} = require('ramda')
let db = require('../../db')
let router = require('../../router')
let {User, UserForm} = require('../../../common/types/User')
let UUID = require('node-uuid')

router.post('/api/users', function* (next) {
    let {params, body: userForm} = this.request

    let user = merge(userForm, {
        id: UUID.v4,
        role: this.request.body.role,
        userName: this.request.body.userName,
        inclusionDate: new Date(),
        exclusionDate: 0,
        countOfPerfomance: 0

    })

    yield this.checkPermissions(user)
    yield this.checkCreateConflicts('users', user)

    db.users.push(user)

    this.response.status = 200
    this.response.body = {
        data: user
    }
    yield next
})

module.exports = router