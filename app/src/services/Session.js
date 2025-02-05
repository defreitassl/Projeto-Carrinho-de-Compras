import User from "../entities/User.js"
import Cart from "../entities/Cart.js"
import Database from "../database/Database.js"

export default class Session {
    #isActive
    #currentUser
    #currentUserCart

    constructor () {
        this.#isActive = false
        this.#currentUser = null
        this.#currentUserCart = null
    }

    async initSession (user, cart) {
        if (user instanceof User) {
            this.#isActive = true
            this.#currentUser = user
            this.#currentUserCart = cart
            const response = await Database.session.registerSession(this.toJSON())
            console.log(response)
            console.log(`A seção de ${this.#currentUser.name} foi inicializada.`)
        } else {
            throw new Error("O usuário para iniciar a sessão deve ser uma instância de User.")
        }
    }

    async endSession () {
        console.log(`A seção de ${this.#currentUser.name} foi encerrada.`)
        this.#isActive = false
        this.#currentUser = null
        this.#currentUserCart = null
        await Database.session.unregisterSession(this.toJSON())
    }

    async verifySessionDb () {
        const sessionFromDb = await Database.session.getSession()
        this.#isActive = sessionFromDb.isActive
        
        if (this.#isActive != false) {
            const currentUser = await Database.users.getOne(sessionFromDb.currentUser)
            const currentUserCart = await Database.carts.getOne(sessionFromDb.currentUserCart)

            this.#currentUser = new User(
                currentUser.id,
                currentUser.isSeller,
                currentUser.name,
                currentUser.email,
                currentUser.password,
                currentUser.cartId,
                currentUser.orders
            )
            this.#currentUserCart = new Cart(
                currentUserCart.id,
                currentUserCart.owner,
                currentUserCart.products,
                currentUserCart.totalPrice
            )
        } else {
            this.#currentUser = sessionFromDb.currentUser
            this.#currentUserCart = sessionFromDb.currentUserCart
        }
    }

    get isActive () {
        return this.#isActive
    }

    get currentUser () {
        return this.#currentUser
    }

    get currentUserCart () {
        return this.#currentUserCart
    }

    set currentUser (user) {
        if (user instanceof User) {
            this.#currentUser = user
        } else {
            throw new Error('O usuário deve ser uma instância de User')
        }
    }

    toJSON () {
        return {
            isActive: this.#isActive,
            currentUser: this.#currentUser ? this.#currentUser.id : null,
            currentUserCart: this.#currentUserCart ? this.#currentUserCart.id : null
        }
    }
}