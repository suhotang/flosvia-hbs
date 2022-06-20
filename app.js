const createError = require("http-errors")
const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const passport = require("passport")
const passportConfig = require("./utils/passportConfig")
const hbsSetting = require("./utils/hbsSetting")
const hbsHelper = require("./utils/hbsHelper")
const routes = require("./routes")
const apiRoutes = require("./routes/api")
const sequelize = require("./models").sequelize

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: path.join(__dirname, ".env.production") })
} else if (process.env.NODE_ENV === "develop") {
  dotenv.config({ path: path.join(__dirname, ".env.develop") })
} else {
  throw new Error("process.env.NODE_ENV를 설정하지 않았습니다!")
}

const app = express()
sequelize.sync()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

hbsSetting(__dirname)
hbsHelper()

// 인증을 위한 passport 설정
app.use(passport.initialize())
passportConfig()
// margan(http req/res logging) logger 사용
app.use(logger("dev"))
// application/json의 Content-Type에 대해 파싱
app.use(express.json())
// application/x-www-form-urlencoded의 Content-Type에 대해 파싱
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
