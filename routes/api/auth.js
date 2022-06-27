const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const passport = require("passport")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const { User } = require("../../models")
const senderInfo = require("../../config/emailSendConfig.json")

router.post("/signin", async function (req, res, next) {
  try {
    passport.authenticate("local", (error, user, _info) => {
      if (error || !user) {
        console.log(`Login failed with error: ${error}`)
        return res.status(400).json({ message: "로그인에 실패하였습니다." })
      }

      return req.login(user, { session: false }, (loginError) => {
        if (loginError) {
          return res.status(400).json({ message: "로그인에 실패하였습니다." })
        }
        const token = jwt.sign({ id: user.id, name: user.name }, "jwt-secret-key")

        res.cookie("cookieKey", "cookieValue", { maxAge: 900000, httpOnly: true })
        return res.status(200).json({ accessToken: token, message: "로그인 성공!" })
      })
    })(req, res)
  } catch (e) {
    console.log(e)
    next(e)
  }
})

router.post("/signup", async function (req, res, next) {
  try {
    // TODO: token check (관리자만 회원 등록 가능)
    // 1. req.body에서 email과 name을 받음
    const email = req?.body?.email
    const name = req?.body?.name

    // 2. 임시 비밀번호 생성
    const tempPwd = Math.random().toString(36).slice(2)

    // 3. email, name, tempPwd를 DB에 저장
    // password 암호화
    const hashPwd = await bcrypt.hash(tempPwd, 12)
    // user table에 새로운 row 추가
    console.log("Before user create")
    await User.create({
      email,
      name,
      password: hashPwd,
    })
    console.log("User successfully created")

    // 4. 회원 이메일로 임시 비밀번호 전송
    const transporter = nodemailer.createTransport({
      service: "gmail", // 메일 보내는 곳
      prot: 587,
      host: "smtp.gmail.com",
      secure: false,
      //requireTLS: true,
      auth: {
        user: senderInfo.email, // 보내는 메일의 주소
        pass: senderInfo.password, // 보내는 메일의 비밀번호
      },
    })

    const mailOptions = {
      from: senderInfo.user, // 보내는 메일의 주소
      to: email, // 수신할 이메일
      subject: `[Flosvia] ${name}님 임시 비밀번호`, // 메일 제목
      text: `임시 비밀번호: ${tempPwd}`, // 메일 내용
    }

    // 메일 발송
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(`Error occurred when send mail: ${error}`)
      } else {
        console.log("Email sent: " + info.response)
      }
    })

    // 5. 회원 등록이 완료되었다는 응답을 보냄
    // return 문을 쓰는 이유 => return을 사용하면 함수 실행이 종료됨 (이후의 코드 실행 X)
    // return을 사용하지 않으면 연쇄 동작이 가능해짐 (res를 보내고 다른 미들웨어도 실행한다는 것)
    // https://stackoverflow.com/questions/43055600/app-get-is-there-any-difference-between-res-send-vs-return-res-send
    return res.json({
      message: "회원가입 성공!",
    })
  } catch (e) {
    // TODO: logger 추가
    console.log(`Error occurred in auth/signup router`)
    return next(e)
  }
})

module.exports = router
