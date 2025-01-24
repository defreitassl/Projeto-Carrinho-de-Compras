export default class Cart {
    #id
    #owner
    #products
    #totalPrice

    constructor(id, owner, products = null, totalPrice = null) {
        this.#id = id
        this.#owner = owner
        this.#products = products === null ? [] : products
        this.#totalPrice = totalPrice === null ? 0 : totalPrice
    }

    get id() {
        return this.#id
    }

    get products() {
        return this.#products
    }

    addProduct(productId, price) {
        const productsInCart = [...this.#products]
        const existingProductIndex = productsInCart.findIndex(product => product.id === productId)

        if (existingProductIndex !== -1) {
            productsInCart[existingProductIndex].quantity = Number(productsInCart[existingProductIndex].quantity) + 1
        } else {
            productsInCart.push({ id: productId, quantity: 1, price: price })
        }
        this.#products = productsInCart
    }

    async updateProductQuantity(productId, quantity) {
        const productsInCart = [...this.#products];
        const existingProductIndex = productsInCart.findIndex(product => product.id === `a${productId}`);
    
        if (existingProductIndex !== -1) {
            if (quantity > 0) {
                productsInCart[existingProductIndex].quantity = quantity;
            } else {
                productsInCart.splice(existingProductIndex, 1); // Remove product if quantity is 0
            }
        } else {
            console.error('Produto não encontrado no carrinho.');
            throw new Error('Produto não encontrado no carrinho.');
        }
    
        this.#products = productsInCart;
    }
    
    clearCart() {
        this.#products = [];
        this.#totalPrice = 0;
    }

    toJSON() {
        return {
            id: this.#id,
            owner: this.#owner,
            products: this.#products,
            totalPrice: this.#totalPrice
        }
    }
}
