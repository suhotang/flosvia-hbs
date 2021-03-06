const express = require("express")
const passport = require("passport")
const router = express.Router()

// Page routes
const main = require("./main")
const plan = require("./plan")
const member = require("./member")
const snack = require("./snack")
const notice = require("./notice")
const login = require("./login")

const authModule = (req, res, next) => {
  const accessToken = req.cookies.accessToken
  console.log(accessToken)
  next()
}

router.use("/", main)
router.use("/plan", authModule, plan)
router.use("/member", member)
router.use("/snack", snack)
router.use("/notice", notice)
router.use("/login", login)

module.exports = router
