const hbs = require("hbs")

function hbsHelper() {
  hbs.registerHelper("menuOpen", function (value) {
    console.log("menu open!")
  })
}

module.exports = hbsHelper
