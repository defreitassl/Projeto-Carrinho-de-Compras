import Table from "./Table.js"

export default class CartsTable extends Table {
    constructor () {
        super("carts")
    }

    async addProduct(idCart, newProductId) {
    try {
        const cart = await super.getOne(idCart);
        if (!cart) {
            throw new Error(`Cart with id ${idCart} not found`);
        }
        const productsInCart = [...cart.products, newProductId];
        const updateCart = await super.update(idCart, { products: productsInCart });
        return updateCart;
    } catch (error) {
        console.error(error);
        throw error;
    }
    }
}