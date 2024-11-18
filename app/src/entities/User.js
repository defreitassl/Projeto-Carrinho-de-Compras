export default class User {
    #id
    #email
    #password
    #orders

    static #id = 1

    constructor(name, email, password, typeUser) {
        this.#id = `${name.slice(0,2)}${User.#id}`
        this.typeUser = typeUser
        this.name = name
        this.#email = email
        this.#password = password
        this.cartId = `Ca${User.#id}`
        this.#orders = []
    }

    get id () {
        return this.#id
    }

    get email () {
        return this.#email
    }

    password (caller) {
        if (caller instanceof Auth) {
            console.log("Acesso permitido")
            return this.#password
        } else {
            throw new Error("Acesso não autorizado")
        }
    }

    order (order) {
        this.#orders.push(order)
    }
}