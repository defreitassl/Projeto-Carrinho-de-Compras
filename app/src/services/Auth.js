import Database from '../database/Database.js'

export default class Auth {

    static instance

    constructor () {

        if (Auth.instance) {
            return Auth.instance
        } else {
            Auth.instance = this
        }
    }

    login (email, password) {
        try {
            const user = Database.users.getUserByEmail(email)
            
            if (user) {
                const userPassword = user.password(this)
                if (password === userPassword) {
                    return user
                }
            } else {
                return "Nenhum usuário com esse e-mail foi encontrado: " + email
            }
        } catch (error) {
            throw new Error("Erro inesperado ao verficar usuário: " + error)
        }
    }

    logout () {}
}