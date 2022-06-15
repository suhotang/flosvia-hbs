export function loginHandler(apiUrl) {
  const loginBtnElement = document.getElementById("login-submit-btn")
  loginBtnElement.addEventListener("click", () => {
    console.log("click btn!")

    const email = document.getElementById("email-input").value
    const password = document.getElementById("pwd-input").value
    console.log(email, password)

    // fetch
  })
}
