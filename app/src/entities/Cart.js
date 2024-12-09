export default class Cart {
    #id
    #owner
    #products

    //Faz verificações para saber se o carrinho está sendo criado agora ou se ele já existe no banco de dados
    constructor (id, owner, products=null, totalPrice=null) {
        this.#id = id
        this.#owner = owner
        this.#products = products === null ? [] : products
        this.totalPrice = totalPrice === null ? 0 : totalPrice
    }

    get id () {
        return this.#id
    }

    get products () {
        return this.#products
    }

    addProduct (product) {
        console.log("Produto adicionado")
        this.#products.push(product)
        this.#calculatePrice()
    }

    #calculatePrice () {
        this.totalPrice = this.#products.reduce((accum, product) => {
            return accum + product.price
        })
    }

    toJSON () {
        return {
            id: this.#id,
            owner: this.#owner,
            products: this.#products,
            totalPrice: this.totalPrice
        }
    }
}