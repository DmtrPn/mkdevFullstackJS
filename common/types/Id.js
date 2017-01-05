let T = require("tcomb")
let UUID = require("node-uuid")

let Id = T.refinement(T.String, (x) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(x)
}, "Id")

let makeId = () => {
  return UUID.v4()
}

exports.Id = Id
exports.makeId = makeId
