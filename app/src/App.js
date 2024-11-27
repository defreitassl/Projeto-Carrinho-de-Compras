import Auth from "./services/Auth.js"
import ProductsApi from "./services/FakeStoreApi.js"
import HomePage from "./components/homePage/HomePage.js"
import ProductCard from "./components/homePage/ProductCard.js"

export default class App {
    static authenticator = new Auth()

    static init () {
        App.renderHomePage(App.authenticator.userLogged)
    }

    static renderHomePage (userLogged) {
        const homePage = new HomePage(userLogged)
        homePage.renderScreen()
        App.fetchProducts()
    }

    static async fetchProducts () {
        const products = await ProductsApi.getAllProducts()
        console.log(products)
        products.forEach(product => {
            const newProduct = new ProductCard(
                product.id,
                product.image,
                product.title,
                product.price,
                product.description,
                product.rating.rate
            )
            newProduct.render()
        });
    }
}