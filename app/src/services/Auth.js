import Database from '../database/Database.js'
import Session from './Session.js'
import User from '../entities/User.js'

export default class Auth {

    constructor () {}

    async login (app, email, password) {
        try {
            const user = await Database.users.getUserByEmail(email)
            
            if (user) {
                if (password === user.password) {
                    app.session.initSession(user)
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

    async register (app, name, email, password) {
        try {} catch (error) {}
    }

    logout () {} // Mudar user logged para falso e reiniciar o app
}