import HeroSection from "./HeroSection.js"
import Categories from "./Categories.js"
import NavBar from "../NavBar.js"
import ProductsSection from "./ProductsSection.js"

export default class HomePage {
    constructor () {
        this.navbar = new NavBar()
        this.hero = new HeroSection()
        this.categories = new Categories()
        this.products = new ProductsSection()
    }
    
    renderScreen (userLogged) {
        this.navbar = new NavBar()
        this.hero = new HeroSection()
        this.categories = new Categories()
        this.products = new ProductsSection()
        
        this.navbar.render() // render the navbar
        !userLogged ? this.hero.render() : console.log("Usuário já está logado | Hero Section nao será renderizado") // render the hero section case the user is not logged
        this.categories.render() // render the categories section
        this.products.render() // render the products section
    }

    cleanScreen () {
        this.navbar.remove()
        this.hero.remove()
        this.categories.remove()
        this.products.remove()
    }

    addEventListeners (authenticator, app) {
        this.navbar.addEventListener(authenticator, app)
        this.hero.addEventListener(app)
        this.categories.addEventListener(app)
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