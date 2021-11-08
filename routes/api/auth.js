const express = require("express")
const router = express.Router()

router.post("/signin", async function (req, res, next) {
  res.json({
    status: "success",
  })
})

router.post("/signup", async function (req, res, next) {
  res.json({
    status: "success",
  })
})

module.exports = router
