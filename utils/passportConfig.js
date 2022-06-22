const passport = require("passport")
const { Strategy: LocalStrategy } = require("passport-local")
const bcrypt = require("bcrypt")

const { User } = require("../models")

const config = { usernameField: "email", passwordField: "password", session: false }

const passportVerify = async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      done(null, false, { message: "존재하지 않는 사용자 입니다." })
      return
    }

    const compareResult = await bcrypt.compare(password, user.password)

    if (compareResult) {
      done(null, user)
      return
    }

    done(null, false, { reason: "올바르지 않은 비밀번호 입니다." })
  } catch (error) {
    console.error(error)
    done(error)
  }
}

module.exports = () => {
  passport.use("local", new LocalStrategy(config, passportVerify))
}
