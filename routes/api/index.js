const express = require("express")
const router = express.Router()

// API routes
const auth = require("./auth")

router.use("/auth", auth)

module.exports = router
