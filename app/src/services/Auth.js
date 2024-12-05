import Database from '../database/Database.js'
import User from '../entities/User.js'

export default class Auth {

    constructor () {}

    async login (app, email, password) {
        try {
            const user = await Database.users.getUserByEmail(email)
            
            if (user) {
                if (password === user.password) {
                    const currentUser = new User(
                        user.id,
                        user.isSeller,
                        user.name,
                        user.email,
                        user.password,
                        user.cartId,
                        user.orders
                    )
                    app.session.initSession(currentUser)
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

    async register (app, isSeller, name, email, password) {
        try {
            const newUser = new User(null, isSeller, name, email, password, null, null)

            const response = await Database.users.send(newUser)

            if (response.status === "OK") {
                app.session.initSession(newUser)
                return response
            } else {
                return response
            }
        } catch (error) {
            throw new Error("Erro inesperado ao criar usuário: " + error)
        }
    }

    logout (app) {
        app.session.endSession()
    }
}