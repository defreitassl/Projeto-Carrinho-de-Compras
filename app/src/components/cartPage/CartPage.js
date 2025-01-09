import CartProductsSection from "./CartProductsSection.js"
import CartResume from "./CartResume.js"
import CartMessage from "./CartMessage.js"
import NavBar from "../NavBar.js"

export default class CartPage {
    constructor() {
        this.navbar = new NavBar()
        this.cartProductsSection = new CartProductsSection()
        this.cartResume = new CartResume()
        this.cartMessage = new CartMessage()
    }

    renderScreen (app) {
        if (app.session.currentUserCart.products.length > 0) {
            this.cartProductsSection = new CartProductsSection()
            this.cartResume = new CartResume()
            this.cartProductsSection.render()
            this.cartResume.render()
        } else {
            this.cartMessage.render()
        }

        this.navbar.render()
    }

    cleanScreen () {
        this.navbar.remove()
        this.cartProductsSection.remove()
        this.cartResume.remove()
    }

    addEventListeners (authenticator, app) {
        this.navbar.addEventListener(authenticator, app)
        this.cartProductsSection.addEventListener()
        this.cartResume.addEventListener()
    }

    showMessage (message) {    
        const alertContainer = document.querySelector("#alert-container")
        alertContainer.textContent = message
        alertContainer.classList.add("show")

        setTimeout(() => {
            alertContainer.classList.remove("show")
        }, 3000)
    }
}
