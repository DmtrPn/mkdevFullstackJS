let Router = require('koa-router')
let router = Router({ prefix: '/perfomances' })

let perfomances = [
  {
    id: 101,
    title: "Hamlet",
    description: "Good story",
    actorsCount: 15,
    premiereDate: new Date(2001, 08, 07),
    closingDate: null,
    visitors: 98,
    rating: 5,
    commentCount: 3
  }]

router
  .get('/', sendPerfomances)
  .get('/:id([0-9]{3,})', sendPerfomanceWithId)
  .post('/', addNewPerfomance)
  .put('/:id', updatePerfomanceWithId)
  .delete('/:id', deletePerfomanceWithId)

function *sendPerfomances(next){
  this.body = perfomances;
  yield next;
}

function *sendPerfomanceWithId(next){
  let ctx = this
  let currPerfomance = perfomances.filter(function(perfomance){
      if(perfomance.id == ctx.params.id){
          return true;
      }
  })
  if (currPerfomance.length == 1) {
      this.body = currPerfomance[0]
  } else {
    this.throw(404)
  }
  yield next;
}

function *addNewPerfomance(next){
  if(!this.request.body.title ||
      !this.request.body.description ||
      !this.request.body.actorsCount ||
      !this.request.body.premiereDate)
  {
    this.throw(400)
  } else {
    console.log('not her')
      let newId = perfomances[perfomances.length - 1].id + 1
      perfomances.push({
          id: newId,
          titel: this.request.body.title,
          description: this.request.body.description,
          actorsCount: this.request.body.actorsCount,
          premiereDate: this.request.body.premiereDate
      });
      this.body = `New perfomance created with id: ${newId}`
  }
  yield next;
}

function *updatePerfomanceWithId(next){
  if(!this.request.body.title ||
      !this.request.body.description ||
      !this.request.body.actorsCount ||
      !this.request.body.premiereDate)
  {
    this.response.status = 400
    this.body = "Bad Request"
  } else {
    let updateIndex = perfomances.map(function(perfomance){
            return perfomance.id
          }).indexOf(parseInt(this.params.id))
    if(updateIndex === -1) {
      perfomances.push({
        id: this.params.id,
        titel: this.request.body.title,
        description: this.request.body.description,
        actorsCount: his.request.body.actorsCount,
        premiereDate: this.request.body.premiereDate
      });
      this.body = `New perfomance created with id: ${newId}`
    } else {
      perfomances[updateIndex] = {
        id: this.params.id,
        titel: this.request.body.title,
        description: this.request.body.description,
        actorsCount: his.request.body.actorsCount,
        premiereDate: this.request.body.premiereDate
      };
      this.body = `Perfomance with id: ${this.params.id} updated.`
    }
  }
}

function *deletePerfomanceWithId(next){
  let removeIndex = perfomances.map(function(perfomance){
    return perfomances.id
  }).indexOf(this.params.id)
  if(removeIndex === -1){
    this.body = `New perfomance with id: ${newId}`
  }else{
    perfomances.splice(removeIndex, 1)
    this.body = `Perfomance with id: ${newId} removed.`
  }
}

module.exports = router
