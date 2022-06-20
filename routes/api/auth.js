const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const passport = require("passport")
const jwt = require("jsonwebtoken")
const { User } = require("../../models")

router.post("/signin", async function (req, res, next) {
  res.json({
    status: "success",
  })
})

router.post("/signup", async function (req, res, next) {
  try {
    // TODO: token check (관리자만 회원 등록 가능)
    // 1. req.body에서 email과 name을 받음
    const email = req?.body?.email
    const name = req?.body?.name
    console.log(email, name)

    // 2. 임시 비밀번호 생성
    const tempPwd = Math.random().toString(10).slice(2)
    console.log(tempPwd)

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

    // 4. 회원 등록이 완료되었다는 응답을 보냄
    // return 문을 쓰는 이유 => return을 사용하면 함수 실행이 종료됨 (이후의 코드 실행 X)
    // return을 사용하지 않으면 연쇄 동작이 가능해짐 (res를 보내고 다른 미들웨어도 실행한다는 것)
    // https://stackoverflow.com/questions/43055600/app-get-is-there-any-difference-between-res-send-vs-return-res-send
    return res.json({
      status: "success",
    })
  } catch (e) {
    // TODO: logger 추가
    console.log(`Error occurred in auth/signup router`)
    return next(e)
  }
})

module.exports = router
