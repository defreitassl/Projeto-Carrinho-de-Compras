export default class Cart {
    #id
    #owner
    #products

    constructor (id, owner) {
        this.#id = id
        this.#owner = owner
        this.#products = []
        this.totalPrice = 0
    }

    get id () {
        return this.#id
    }

    get products () {
        return this.#products
    }

    addProduct (product) {
        this.#products.push(product)
        this.#calculatePrice()
    }

    #calculatePrice () {
        this.totalPrice = this.#products.reduce((accum, product) => {
            return accum + product.price
        })
    }
}