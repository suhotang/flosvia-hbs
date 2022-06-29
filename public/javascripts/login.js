function parseJwt(token) {
  var base64Url = token.split(".")[1]
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join("")
  )

  return JSON.parse(jsonPayload)
}

export function loginHandler(apiUrl) {
  const loginBtnElement = document.getElementById("login-submit-btn")
  loginBtnElement.addEventListener("click", () => {
    const email = document.getElementById("email-input").value
    const password = document.getElementById("pwd-input").value

    fetch(`${apiUrl}/api/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(async (_res) => {})
      .catch((error) => {
        console.log(error)
        alert("로그인 실패!")
      })
  })
}
