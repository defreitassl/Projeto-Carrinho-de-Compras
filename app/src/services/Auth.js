import Database from '../database/Database.js'

export default class Auth {

    static instance

    constructor () {

        if (Auth.instance) {
            return Auth.instance
        } else {
            this.userLogged = false
            Auth.instance = this
        }
    }

    async login (email, password) {
        try {
            const user = await Database.users.getUserByEmail(email)
            console.log(user)
            
            if (user) {
                if (password === user.password) {
                    this.userLogged = true
                    return user
                } else {
                    return "Senha incorreta. Tente novamente."
                }
            } else {
                return "Nenhum usuário com esse e-mail foi encontrado: " + email
            }
        } catch (error) {
            throw new Error("Erro inesperado ao verficar usuário: " + error)
        }
    }

    logout () {} // Mudar user logged para falso e reiniciar o app
}