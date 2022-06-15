const hbs = require("hbs")

function hbsHelper() {
  hbs.registerHelper("getServerUrl", function (value) {
    return process.env.API_HOST
  })
}

module.exports = hbsHelper
