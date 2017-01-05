let T = require("tcomb")
let {Id, makeId} = require("./Id")
let Faker = require("faker")
let Chance = require("chance")

let PerfomanceComment = T.struct({
  id: Id,
  perfomanceId: Id,
  fromUserId: Id, // кто написал комментарий
  toUserId: Id, // на чей комментарий получен ответ.
                // отвечать могут пользователи с ролью actor и director
  text: T.String,
  createdIn: T.Date,
  editedOn: T.Date
}, "PerfomanceComment")

let PerfomanceCommentForm = T.struct({
  text: T.String,
}, "PerfomanceCommentForm")

let makePerfomanceComment = (data) => {
  let createdIn = chance.date({min: new Date("2004-09-01"), max: new Date()})
  let editedOn = chance.date({min: createdIn, max: new Date()})

  return PerfomanceComment(merge({
    id: makeId(),
    perfimanceId: makeId(),
    formUserId: makeId(),
    toUserId: makeId(),
    text: Faker.lorem.paragraphs(5),
    createdIn: createdIn,
    editedOn: editedOn
  }, data))
}

exports.PerfomanceComment = PerfomanceComment
exports.PerfomanceCommentForm = PerfomanceCommentForm
exports.makePerfomanceComment = makePerfomanceComment
