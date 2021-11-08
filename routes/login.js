const express = require("express")
const router = express.Router()

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("login", {
    title: "Flosvia - 로그인",
    stylesheet: "/css/login.css",
    jsfile: "javascripts/login.js",
  })
})

module.exports = router
