const express = require("express")
const router = express.Router()

router.get("/summary", async function (req, res, next) {
  res.json({
    // 최대 3개
    today_plan: [
      {
        name: "홈페이지 제작",
        start_date: "yyyy-mm-dd hh:mm",
        end_date: "yyyy-mm-dd hh:mm",
      },
      {
        name: "동아리 회의",
        start_date: "yyyy-mm-dd hh:mm",
        end_date: "yyyy-mm-dd hh:mm",
      },
    ],
    // 최대 3개
    new_notice: [
      {
        title: "친애하는 동아리 동무 여러분덜",
        contents: "어쩌구저쩌구",
        created_date: "yyyy-mm-dd hh:mm",
        updated_date: "yyyy-mm-dd hh:mm",
      },
    ],
    snack_poll_of_month: {
      list: [
        {
          name: "프링글스",
          price: "4450",
          count: 3,
          link: "",
          voted_count: 0,
          author_id: 1,
        },
        {
          name: "자색고구마칩",
          price: "950",
          count: 3,
          link: "",
          voted_count: 1,
          author_id: 2,
        },
      ],
    },
  })
})

module.exports = router
