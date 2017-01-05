let T = require("tcomb")
let {format: formatDT} = require("date-fns")

T.Date.formJSON = function(x) {
  if (typeof x == "string") {
    return new Date(x)
  } else {
    return x
  }
}

function secPrecisionDate(d) {
  return formatDT(d, "YYYY-MM-DD HH:MM:SS")
}

function dayPrecisionDate(d) {
  return formatDT(d, "YYYY-MM-DD")
}

exports.secPrecisionDate = secPrecisionDate
exports.dayPrecisionDate = dayPrecisionDate
