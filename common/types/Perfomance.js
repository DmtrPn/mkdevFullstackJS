let T = require("tcomb")
let {Id, makeId} = require("./Id")
let Faker = require("faker")
let Chance = require("chance")

let Perfomance = T.struct({
  id: Id,
  title: T.String,
  description: T.String,
  actorsCount: T.Number,
  premiereDate: T.Date,
  closingDate: T.Date,
  visitors: T.Number,
  rating: T.Number,
  commentCount: T.Number
}, "Perfomance")

let PerfomanceForm = T.struct({
  title: T.String,
  description: T.String
}, "PerfomanceForm")

let makePerfomance = (data) => {
  let premiereDate = chance.date({min: new Date("2004-09-01"), max: new Date()})
  let closingDate = chance.date({min: premiereDate, max: new Date()})

  return Perfomance(merge({
    id: makeId(),
    title: Faker.lorem.sentence(),
    description: Faker.lorem.paragraphs(3),
    actorsCount: chance.natural({min: 1, max: 20}),
    premiereDate: premiereDate,
    closingDate: closingDate,
    visitors: chance.natural({min: 0, max: 100}),
    rating: chance.floating({min: 0, max: 5}),
    commentCount: chance.natural({min: 0, max: 5})
  }, data))
}

exports.Perfomance = Perfomance
exports.PerfomanceForm = PerfomanceForm
exports.makePerfomance = makePerfomance
