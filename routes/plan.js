const express = require("express")
const router = express.Router()

/* GET plan page. */
router.get("/", function (req, res, next) {
  res.render("plan", { title: "Flosvia - Plan 게시판", stylesheet: "/css/plan.css" })
})

module.exports = router
