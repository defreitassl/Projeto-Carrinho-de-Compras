import Database from '../database/Database.js'
import User from '../entities/User.js'
import Cart from '../entities/Cart.js'

export default class Auth {

    constructor () {}

    async login (app, email, password) {
        try {
            const user = await Database.users.getUserByEmail(email)
            const userCart = await Database.carts.getOne(user.cartId)
            
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
                    const currentCart = new Cart(
                        userCart.id,
                        userCart.owner,
                        userCart.products,
                        userCart.totalPrice
                    )
                    app.session.initSession(currentUser, currentCart)
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
            const newCart = new Cart(newUser.cartId, newUser.id)

            const responseUser = await Database.users.send(newUser)
            const responseCart = await Database.carts.send(newCart)

            if (responseUser.status === "OK" && responseCart.status === "OK") {
                app.session.initSession(newUser, newCart)
                return response
            } else {
                return response
            }
        } catch (error) {
            throw new Error("Erro inesperado ao criar usuário: " + error)
        }
    }

    async addProductToCartDb (cart, productId) {
        try {
            const response = await Database.carts.addProduct(cart.id, productId)
            return response
        } catch (error) {
            throw new Error("Erro ao adicionar produto ao carrinho.")
        }
    }

    logout (app) {
        app.session.endSession()
    }
}