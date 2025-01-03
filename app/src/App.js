import Auth from "./services/Auth.js"
import ProductCard from "./components/homePage/ProductCard.js"
import CartProduct from "./components/cartPage/CartProduct.js"
import HomePage from "./components/homePage/HomePage.js"
import LoginPage from "./components/loginPage/LoginPage.js"
import CartPage from "./components/cartPage/CartPage.js"
import Session from "./services/Session.js"
import FakeStoreApi from "./services/FakeStoreApi.js"
import Database from "./database/Database.js"

export default class App {
    constructor() {
        this.authenticator = new Auth()
        this.homePage = new HomePage()
        this.loginPage = null
        this.cartPage = null
        this.isOnHomePage = false  // Flag para monitorar se estamos na página inicial
        this.isOnCartPage = false
        this.session = new Session()
    }

    init() {
        this.loginPage = new LoginPage()
        this.homePage = new HomePage()
        this.cartPage = new CartPage()
        this.goToHomePage(this.session.isActive)
    }

    goToHomePage(userLogged, products=false) {
        this.cleanScreen()
        this.isOnHomePage = true  // Marcamos como na página inicial
        this.isOnCartPage = false
        this.homePage = new HomePage()
        this.homePage.renderScreen(userLogged)
        this.renderProducts(products)
        this.homePage.addEventListeners(this.authenticator, this)
    }

    goToCartPage() {
        this.cleanScreen()
        this.isOnHomePage = false
        this.isOnCartPage = true // Marcamos como na página de carrinho
        this.cartPage = new CartPage()
        this.cartPage.renderScreen()
        this.fetchCartProducts()
        this.cartPage.addEventListeners(this.authenticator, this)
    }

    goToLoginPage() {
        this.cleanScreen()
        this.isOnHomePage = false
        this.isOnCartPage = false
        this.loginPage = new LoginPage()
        this.loginPage.renderScreen()
        this.loginPage.addEventListeners(this.authenticator, this)
    }

    cleanScreen() {
        this.homePage.cleanScreen()
        this.loginPage.cleanScreen()
        this.cartPage.cleanScreen()
    }

    async renderProducts(products=false) {
        let productsList

        if (products) {
            productsList = products
        } else {
            productsList = await FakeStoreApi.getAllProducts()
        }

        // Renderizar apenas se ainda estivermos na página inicial
        if (this.isOnHomePage) {
            productsList.forEach(product => {
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
            ProductCard.addEventListener(this)
        }
    }

    async fetchCartProducts () {
        const productCarts = this.session.currentUserCart.products
        productCarts.forEach(async (productId) => {
            const productObj = await FakeStoreApi.getOneProduct(productId.replace("a","").trim())
            const cartProduct = new CartProduct(
                productObj.id,
                productObj.title,
                productObj.price,
                productObj.image
            )
            cartProduct.render()
        })
    }

    async getProductByCategory (category) {
        const products = await FakeStoreApi.getProductsByCategory(category)
        this.goToHomePage(this.session.isActive, products)
    }

    async searchProducts (searchValue) {
        const allProducts = await FakeStoreApi.getAllProducts()
        const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
        this.goToHomePage(this.session.isActive, filteredProducts)
    }

    async addProductToCart (product) {
        try {
            this.session.currentUserCart.addProduct(product)
            const response = await this.authenticator.addProductToCartDb(this.session.currentUserCart, product)
            this.homePage.showMessage(response)
        } catch (error) {
            console.error('Error adding product to cart:', error)
            this.homePage.showMessage('Error adding product to cart')
        }
    }
}
