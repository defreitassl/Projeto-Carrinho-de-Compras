import CartProductsSection from "./CartProductsSection.js";
import CartResume from "./CartResume.js";
import CartMessage from "./CartMessage.js";
import NavBar from "../NavBar.js";

export default class CartPage {
    constructor() {
        this.navbar = new NavBar();
        this.cartProductsSection = new CartProductsSection();
        this.cartResume = null;
        this.cartMessage = new CartMessage();
    }

    renderScreen(app) {
        console.log("Rendering Cart Page..."); // Debugging log
        console.log("Current cart products:", app.session.currentUserCart.products); // Debugging log
        if (app.session.currentUserCart.products.length > 0) {
            this.cartResume = new CartResume(app.session.currentUserCart);
            this.cartProductsSection.render();
            this.cartResume.render();
        } else {
            this.cartMessage.render();
        }
        this.navbar.render();
    }

    cleanScreen() {
        this.navbar.remove();
        this.cartProductsSection.remove();
        if (this.cartResume) this.cartResume.remove();
    }

    addEventListeners(authenticator, app) {
        this.navbar.addEventListener(authenticator, app);
        this.cartProductsSection.addEventListener();
        if (this.cartResume) this.cartResume.addEventListener(); // Add listeners if it exists
    }

    showMessage(message) {    
        const alertContainer = document.querySelector("#alert-container");
        alertContainer.textContent = message;
        alertContainer.classList.add("show");

        setTimeout(() => {
            alertContainer.classList.remove("show");
        }, 3000);
    }
}
