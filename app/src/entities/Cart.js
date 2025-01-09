export default class Cart {
    #id
    #owner
    #products
    #totalPrice

    //Faz verificações para saber se o carrinho está sendo criado agora ou se ele já existe no banco de dados
    constructor (id, owner, products=null, totalPrice=null) {
        this.#id = id
        this.#owner = owner
        this.#products = products === null ? [] : products
        this.#totalPrice = totalPrice === null ? 0 : totalPrice
    }

    get id () {
        return this.#id
    }

    get products () {
        return this.#products
    }
    addProduct (productId) {
        const productsInCart = [...this.#products]
        const existingProductIndex = productsInCart.findIndex(product => product.id === productId)

        if (existingProductIndex !== -1) {
            productsInCart[existingProductIndex].quantity = Number(productsInCart[existingProductIndex].quantity) + 1
        } else {
            productsInCart.push({ id: productId, quantity: 1 })
        }
        this.#products = productsInCart
    }
    
    updateProductQuantity (productId, quantity) {
    const productsInCart = [...this.#products]
    const existingProductIndex = productsInCart.findIndex(product => product.id === productId)

    if (existingProductIndex !== -1) {
        productsInCart[existingProductIndex].quantity = quantity
    } else {
        throw new Error('Produto nao encontrado no carrinho.')
    }

    this.#products = productsInCart
}

    toJSON () {
        return {
            id: this.#id,
            owner: this.#owner,
            products: this.#products,
            totalPrice: this.#totalPrice
        }
    }
}