const express = require("express")
const router = express.Router()

/* GET notice page. */
router.get("/", function (req, res, next) {
  res.render("notice", {
    title: "Flosvia - Notice 게시판",
    stylesheet: "/css/notice.css",
  })
})

module.exports = router
