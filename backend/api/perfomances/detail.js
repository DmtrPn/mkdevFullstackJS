let router = require('../../router')
let db = require('../../db')

router.get('/perfomances/:id([0-9]{3,})', function* (next) {  //:id([0-9]{3,}

    let { params , body: form} = this.request

    let currPerfomance = db.perfomances.filter(function(perfomance){
        if(perfomance.id == params.id){
            return true;
        }
    })

    if (currPerfomance.length == 1) {
        this.response.status = 201
        this.response.body = {
            data: currPerfomance[0]
        }
    } else {
        this.throw(404)
    }
    yield next;
})

module.exports = router