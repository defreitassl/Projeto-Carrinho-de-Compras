import Table from "./Table.js"

export default class CartsTable extends Table {
    constructor () {
        super("carts")
    }

    async addProduct (idCart, newProductId) {
        const productsInCart = await super.getOne(idCart).then((cart) => {
            return cart.products
        })
        productsInCart.push(newProductId)
        const updateCart = await super.update(idCart, { products: productsInCart })
        return updateCart
    }
}