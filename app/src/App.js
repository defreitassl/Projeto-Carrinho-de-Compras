import Auth from "./services/Auth.js"
import ProductsApi from "./services/FakeStoreApi.js"
import ProductCard from "./components/homePage/ProductCard.js"
import HomePage from "./components/homePage/HomePage.js"
import LoginPage from "./components/loginPage/LoginPage.js"

export default class App {
    constructor() {
        this.authenticator = new Auth()
        this.homePage = null
        this.loginPage = null
        this.cartPage = null
        this.isOnHomePage = false  // Flag para monitorar se estamos na página inicial
    }

    init() {
        this.goToHomePage(this.authenticator.userLogged)
    }

    goToHomePage(userLogged) {
        this.isOnHomePage = true  // Marcamos como na página inicial
        this.cleanScreen()
        this.homePage = new HomePage()
        this.homePage.renderScreen(userLogged)
        this.renderProducts()
    }

    goToLoginPage() {
        this.isOnHomePage = false  // Marcamos que não estamos mais na página inicial
        this.loginPage = new LoginPage()
        this.cleanScreen()
        this.loginPage.renderScreen()
        this.loginPage.addEventListeners(this.authenticator, this) // Passar auth e app
    }

    async renderProducts() {
        const products = await ProductsApi.getAllProducts()

        // Renderizar apenas se ainda estivermos na página inicial
        if (this.isOnHomePage) {
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
            })
        }
    }

    cleanScreen() {
        if (this.homePage) {
            this.homePage.cleanScreen()
        }
        if (this.loginPage) {
            this.loginPage.cleanScreen()
        }
        if (this.cartPage) {
            this.cartPage.cleanScreen()
        }
    }
}
