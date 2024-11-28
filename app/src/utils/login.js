document.addEventListener("DOMContentLoaded", () => {
    const toCreateAccountBtn = document.getElementById("toCreateAccountForm")
    const toLoginBtn = document.getElementById("toLoginForm")
    const loginSlider = document.querySelector(".login-slider")

    const loginForm = document.querySelector(".login-form")
    const createAccountForm = document.querySelector(".create-account-form")

    toCreateAccountBtn.addEventListener("click", () => {
        loginSlider.style.transform = "translateX(-50%)"
        // loginForm.classList.add("hidden")
        // createAccountForm.classList.remove("hidden")
    })

    toLoginBtn.addEventListener("click", () => {
        loginSlider.style.transform = "translateX(0)"
        // loginForm.classList.remove("hidden")
        // createAccountForm.classList.add("hidden")
    })
})