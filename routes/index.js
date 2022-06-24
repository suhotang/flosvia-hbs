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

router.use("/", main)
router.use("/plan", passport.authenticate("jwt", { session: false }), plan)
router.use("/member", passport.authenticate("jwt", { session: false }), member)
router.use("/snack", passport.authenticate("jwt", { session: false }), snack)
router.use("/notice", passport.authenticate("jwt", { session: false }), notice)
router.use("/login", login)

module.exports = router
