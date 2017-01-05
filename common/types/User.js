let T = require("tcomb")
let {Id, makeId} = require("./Id")
let Faker = require("faker")
let slug = require("speakingurl")
let Chance = require("chance")

let UserRole = T.enums.of("viewer", "actor", "director", "admin")

let User = T.struct({
  id: Id,
  role: UserRole,
  userName: T.String,
  inclusionDate: T.Date,
  exclusionDate: T.Date,
  countOfPerfomance: T.Number
}, "User")

let UserForm = T.struct({
  userName: T.String
}, "UserForm")

let makeUser = (data) => {
  let inclusionDate = chance.date({min: new Date("2004-09-01"), max: new Date()})
  let exclusionDate = chance.date({min: inclusionDate, max: new Date()})

  return User(merge({
    id: makeId(),
    role: "admin",
    userName: slug(Faker.name.findName()),
    inclusionDate: inclusionDate,
    exclusionDate: exclusionDate,
    countOfPerfomance: chance.natural({min: 0, max: 15})
  }, data))
}

exports.User = User
exports.UserForm = UserForm
exports.makeUser = makeUser
