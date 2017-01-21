let router = require('../../router')
let db = require('../../db')

router.get('/api/users/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let currUser = db.users.filter(function(user){
        if(user.id == params.id){
            return true;
        }
    })

    if (currUser.length == 1) {
        this.response.status = 201
        this.response.body = {
            data: currUser[0]
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router