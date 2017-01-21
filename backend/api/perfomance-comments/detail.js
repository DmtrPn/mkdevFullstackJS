let router = require('../../router')
let db = require('../../db')

router.get('/api/perfomanceComments/:id([0-9]{3,})', function* (next) {

    let {params , body: form} = this.request

    let currComment = db.perfomanceComments.filter(function(user){
        if(perfomanceComments.id == params.id){
            return true;
        }
    })

    if (currComment.length == 1) {
        this.response.status = 201
        this.response.body = {
            data: currComment[0]
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router