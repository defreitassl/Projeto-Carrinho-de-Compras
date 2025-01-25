import LoginContainer from "./LoginContainer.js"

export default class LoginPage{
    constructor() {
        this.loginContainer = new LoginContainer()
    }

    renderScreen() {
        this.loginContainer.container.style.width = "100vw";
        this.loginContainer.container.style.height = "100vh";
        this.loginContainer.render();
        const cartContainer = document.querySelector(".cart-inner-container");
        cartContainer.style.display = "none";
    }

    cleanScreen() {
        this.loginContainer.container.style.width = "0px"
        this.loginContainer.container.style.height = "0px"
        this.loginContainer.remove()
    }

    addEventListeners(authenticator, app) {
        document.querySelector('.login-button').addEventListener("click", async () => {
            const email = document.querySelector('#email')
            const password = document.querySelector('#password')

            if (email.value && password.value) {
                const result = await authenticator.login(app, email.value, password.value)
                
                if (typeof result === "string") {
                    alert(result)
                } else {
                    app.goToHomePage(app.session.isActive)
                }
            } else {
                alert('Preencha todos os campos antes de enviar.')
            }
        })

        document.querySelector('.create-account-button').addEventListener("click", async () => {
            const name = document.querySelector('#newName')
            const email = document.querySelector('#newEmail')
            const password = document.querySelector('#newPassword')
            const seller = document.querySelector('#seller')

            if (name.value && email.value && password.value) {
                const response = await authenticator.register(app, seller.checked, name.value, email.value, password.value)

                alert(response.message)
                if (response.status === "OK") {
                    app.goToHomePage(app.session.isActive)
                } 
            } else {
                alert('Preencha todos os campos antes de enviar.')
            }
        })

        const toCreateAccountBtn = document.getElementById("toCreateAccountForm")
        const toLoginBtn = document.getElementById("toLoginForm")
        const loginSlider = document.querySelector(".login-slider")
    
        toCreateAccountBtn.addEventListener("click", () => {
            loginSlider.style.transform = "translateX(-75%)"
        })
    
        toLoginBtn.addEventListener("click", () => {
            loginSlider.style.transform = "translateX(0)"
        })
    }

    showMessage (message) {    
        const alertContainer = document.querySelector("#alert-container")
        alertContainer.textContent = message
        alertContainer.classList.add("show")

        setTimeout(() => {
            alertContainer.classList.remove("show")
        }, 3000)
    }
}
