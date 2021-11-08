const hbs = require("hbs")

function hbsSetting(dirname) {
  hbs.registerPartials(dirname + "/views/partials", function (err) {})
}

module.exports = hbsSetting
