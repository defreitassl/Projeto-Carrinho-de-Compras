export default class User {
    #id
    #email
    #password
    #orders

    static #id = 1

    constructor(name, email, password) {
        this.#id = `${name.slice(0,2)}${User.#id}`
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

    order (order) {
        this.#orders.push(order)
    }
}