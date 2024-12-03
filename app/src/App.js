import Auth from "./services/Auth.js"
import ProductsApi from "./services/FakeStoreApi.js"
import ProductCard from "./components/homePage/ProductCard.js"
import HomePage from "./components/homePage/HomePage.js"
import LoginPage from "./components/loginPage/LoginPage.js"
import Session from "./services/Session.js"

export default class App {
    constructor() {
        this.authenticator = new Auth()
        this.homePage = new HomePage()
        this.loginPage = null
        this.cartPage = null
        this.isOnHomePage = false  // Flag para monitorar se estamos na página inicial
        this.session = new Session()
    }

    init() {
        this.loginPage = new LoginPage()
        this.homePage = new HomePage()
        // Adicionar instacia do cartPage
        this.goToHomePage(this.session.isActive)
    }

    goToHomePage(userLogged) {
        this.cleanScreen()
        this.isOnHomePage = true  // Marcamos como na página inicial
        this.homePage = new HomePage()
        this.homePage.renderScreen(userLogged)
        this.renderProducts()
    }

    goToLoginPage() {
        this.cleanScreen()
        this.isOnHomePage = false  // Marcamos que não estamos mais na página inicial
        this.loginPage = new LoginPage()
        this.loginPage.renderScreen()
        this.loginPage.addEventListeners(this.authenticator, this)
    }

    cleanScreen() {
        this.homePage.cleanScreen()
        this.loginPage.cleanScreen()
        //this.cartPage.cleanScreen()
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
}
