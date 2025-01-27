import Table from "./Table.js"

export default class CartsTable extends Table {
    constructor () {
        super("carts")
    }

    calculateTotalPrice (productsList) {
        const totalPrice = productsList.reduce((acc, product) => acc + Number(product.price) * Number(product.quantity), 0)
        return totalPrice
    }

    async addProduct(idCart, newProductId, price) {
        try {
            const cart = await super.getOne(idCart)

            if (!cart) {
                throw new Error(`Cart with id ${idCart} not found`)
            }

            const productsInCart = [...cart.products]
            const existingProductIndex = productsInCart.findIndex(product => product.id === newProductId)

            if (existingProductIndex !== -1) {
                productsInCart[existingProductIndex].quantity = Number(productsInCart[existingProductIndex].quantity) + 1
            } else {
                productsInCart.push({ id: newProductId, quantity: 1, price: price })
            }

            const totalPrice = this.calculateTotalPrice(productsInCart)
            console.log("Calculating total price:" + totalPrice)
            const response = await super.update(idCart, { totalPrice: totalPrice })
            console.log(response)

            return await super.update(idCart, {products: productsInCart})
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async decreaseProductQuantity(idCart, productId) {
        try {
            const cart = await super.getOne(idCart)

            if (!cart) {
                throw new Error(`Cart with id ${idCart} not found`)
            }

            const productsInCart = [...cart.products]
            const existingProductIndex = productsInCart.findIndex(product => product.id === productId)

            if (existingProductIndex !== -1) {
                if (productsInCart[existingProductIndex].quantity > 1) {
                    productsInCart[existingProductIndex].quantity -= 1;
                } else {
                    productsInCart.splice(existingProductIndex, 1); // Remove product if quantity is 0
                }
            } else {
                throw new Error('Produto não encontrado no carrinho.');
            }

            return await super.update(idCart, {products: productsInCart})
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}
