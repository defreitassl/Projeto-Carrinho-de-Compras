export default class User {
    #id
    #email
    #password
    #orders

    static #idRaw = 1

    // Realiza uma série de verificações para saber se o usuário foi pego do banco de dados 
    //ou se é um novo usuário. Se for um novo usuário a classe cria um ID, cartId e lista de pedidos, 
    //se for um usuário existente ele pega as informações prontas passadas a partir do banco de dados
    constructor(id=null, isSeller, name, email, password, cartId=null, orders=null) {
        this.#id = id === null ? `${name.slice(0,2)}${User.#idRaw}` : id
        this.isSeller = isSeller
        this.name = name
        this.#email = email
        this.#password = password
        this.cartId = cartId === null ? `Ca${User.#idRaw}` : cartId
        this.#orders = orders === null ? [] : orders
        User.#idRaw++
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

    get orders () {
        return this.#orders
    }

    order (order) {
        this.#orders.push(order)
    }

    toJSON () {
        return {
            id: this.#id,
            isSeller: this.isSeller,
            name: this.name,
            email: this.#email,
            password: this.#password,
            cartId: this.cartId,
            orders: this.#orders
        }
    }
}