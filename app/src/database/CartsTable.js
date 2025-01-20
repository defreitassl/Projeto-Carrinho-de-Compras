import Table from "./Table.js"

export default class CartsTable extends Table {
    constructor () {
        super("carts")
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

            return await super.update(idCart, {products: productsInCart})
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}