const express = require("express")
const router = express.Router()

/* GET snack page. */
router.get("/", function (req, res, next) {
  res.render("snack", { title: "Flosvia - Snack 투표", stylesheet: "/css/snack.css" })
})

module.exports = router
