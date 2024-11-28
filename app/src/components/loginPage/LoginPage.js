import LoginContainer from "./LoginContainer.js"

export default class LoginPage{
    constructor() {
        this.loginContainer = new LoginContainer()
    }

    renderScreen() {
        this.loginContainer.container.style.width = "100vw"
        this.loginContainer.container.style.height = "100vh"
        this.loginContainer.render()
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
                const result = await authenticator.login(email.value, password.value)
                
                if (typeof result === "string") {
                    alert(result)
                } else {
                    app.goToHomePage(authenticator.userLogged)
                }
            } else {
                alert('Preencha todos os campos antes de enviar.')
            }
        })

        document.querySelector('.create-account-button').addEventListener("click", () => {
            const name = document.querySelector('#newName')
            const email = document.querySelector('#newEmail')
            const password = document.querySelector('#newPassword')
            const seller = document.querySelector('#seller')

            if (name.value && email.value && password.value) {
                // Aqui você deve enviar os dados para a lógica de criar conta
                console.log([name.value, email.value, password.value, seller.checked])
                // Implemente a lógica de cadastro conforme necessário
            } else {
                alert('Preencha todos os campos antes de enviar.')
            }
        })
    }
}
