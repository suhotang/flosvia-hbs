const express = require("express")
const router = express.Router()

router.post("/signin", async function (req, res, next) {
  res.json({
    status: "success",
  })
})
router.post("/signup", async function (req, res, _next) {
  // TODO: token check
  const email = req?.body?.email
  const password = req?.body?.password
  console.log(email, password)

  res.json({
    status: "success",
  })
})

module.exports = router
