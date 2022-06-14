const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const hbsSetting = require("./utils/hbsSetting")
const hbsHelper = require("./utils/hbsHelper")
const routes = require("./routes")
const apiRoutes = require("./routes/api")
const sequelize = require("./models").sequelize

const app = express()
sequelize.sync()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

hbsSetting(__dirname)
hbsHelper()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", routes)
app.use("/api", apiRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
