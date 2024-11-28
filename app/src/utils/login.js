document.addEventListener("DOMContentLoaded", () => {
    const toCreateAccountBtn = document.getElementById("toCreateAccountForm")
    const toLoginBtn = document.getElementById("toLoginForm")
    const loginSlider = document.querySelector(".login-slider")

    toCreateAccountBtn.addEventListener("click", () => {
        loginSlider.style.transform = "translateX(-75%)"
    })

    toLoginBtn.addEventListener("click", () => {
        loginSlider.style.transform = "translateX(0)"
    })
})

