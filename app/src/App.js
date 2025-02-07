import Auth from "./services/Auth.js"
import ProductCard from "./components/homePage/ProductCard.js"
import CartProduct from "./components/cartPage/CartProduct.js"
import HomePage from "./components/homePage/HomePage.js"
import LoginPage from "./components/loginPage/LoginPage.js"
import CartPage from "./components/cartPage/CartPage.js"
import Session from "./services/Session.js"
import Cart from "./entities/Cart.js"
import Order from "./entities/Order.js"
import OrderItem from "./components/orderHistoryPage/OrderItem.js"
import OrdersPage from "./components/orderHistoryPage/OrdersPage.js"
import FakeStoreApi from "./services/FakeStoreApi.js"

export default class App {
    constructor() {
        this.authenticator = new Auth()
        this.homePage = new HomePage()
        this.loginPage = null
        this.cartPage = null
        this.orderHistoryPage = null
        this.isOnHomePage = false
        this.isOnCartPage = false
        this.session = new Session()
    }

    async init() {
        this.loginPage = new LoginPage()
        this.homePage = new HomePage()
        this.cartPage = new CartPage()
        this.orderHistoryPage = new OrdersPage()
        await this.session.verifySessionDb()
        this.goToHomePage(this.session.isActive)
    } 

    goToHomePage(userLogged, products=false) {
        this.cleanScreen()
        this.isOnHomePage = true
        this.isOnCartPage = false
        this.homePage = new HomePage()
        this.homePage.renderScreen(userLogged)
        this.renderProducts(products)
        this.homePage.addEventListeners(this.authenticator, this)
    }

    goToCartPage() {
        this.cleanScreen()
        this.isOnHomePage = false
        this.isOnCartPage = true
        this.cartPage = new CartPage()
        this.cartPage.renderScreen(this)
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

    goToOrderHistoryPage() {
        this.cleanScreen()
        this.isOnHomePage = false
        this.isOnCartPage = false
        this.orderHistoryPage = new OrdersPage()
        this.orderHistoryPage.renderScreen(this)
        this.fetchOrders()
        this.orderHistoryPage.addEventListeners(this.authenticator, this)
    }

    cleanScreen() {
        this.homePage.cleanScreen()
        this.loginPage.cleanScreen()
        this.cartPage.cleanScreen()
        this.orderHistoryPage.cleanScreen()
    }

    async renderProducts(products=false) {
        let productsList

        if (products) {
            productsList = products
        } else {
            productsList = await FakeStoreApi.getAllProducts()
        }

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

    async fetchCartProducts() {
        const productCarts = this.session.currentUserCart.products;
    
        const cartProductsList = document.querySelector(".cart-products-list");
        if (cartProductsList) {
            cartProductsList.innerHTML = ""
        }

        for (const product of productCarts) {
            const productObj = await FakeStoreApi.getOneProduct(product.id.replace("a", "").trim());
            const cartProduct = new CartProduct(
                productObj.id,
                productObj.title,
                Number(productObj.price),
                productObj.image,
                Number(product.quantity)
            );
            cartProduct.render();
        }
        CartProduct.addEventListener(this);
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

    async addProductToCart (productId, price) {
        try {
            this.session.currentUserCart.addProduct(productId, price)
            const response = await this.authenticator.addProductToCartDb(this.session.currentUserCart, productId, price)
            this.homePage.showMessage(response)
        } catch (error) {
            console.error('Erro ao adicionar produto ao carrinho:', error)
            this.homePage.showMessage('Erro ao adicionar produto ao carrinho:')
        }
    }

    async createOrder (cart) {
        const newOrder = new Order(Number(this.session.currentUser.orders.length + 1), this.session.currentUser.id, cart.products, cart.totalPrice)
        this.authenticator.registerOrder(this, newOrder)
    }
    
    async fetchOrders () {
        const ordersIds = this.session.currentUser.orders
        for (const orderId of ordersIds) {
            const order = await this.authenticator.getOrder(orderId)
            let productsInfo = {
                imgLinks: [],
                titles: []
            }

            for (const product of order.products) {
                const productObj = await FakeStoreApi.getOneProduct(product.id.replace("a", "").trim())
                productsInfo.imgLinks.push(productObj.image)
                productsInfo.titles.push(productObj.title)
            }
            const orderItem = new OrderItem(order.id, order.date, productsInfo.imgLinks[0], productsInfo.titles, order.totalPrice)
            orderItem.render()
        }
        OrderItem.addEventListeners(this)
    }

    async buyOrderAgain (orderId) {
        const order = await this.authenticator.getOrder(orderId)
        this.session.currentUserCart.clearCart()
        order.products.forEach( async (product) => {
            await this.addProductToCart(product.id, product.price)
        })
        this.goToCartPage()
    }
}
