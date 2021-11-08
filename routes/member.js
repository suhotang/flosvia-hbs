const express = require("express")
const router = express.Router()

/* GET member page. */
router.get("/", function (req, res, next) {
  res.render("member", { title: "Flosvia - Member 소개", stylesheet: "/css/member.css" })
})

module.exports = router
