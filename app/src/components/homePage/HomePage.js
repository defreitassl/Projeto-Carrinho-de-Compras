import HeroSection from "./HeroSection.js"
import Categories from "./Categories.js"
import NavBar from "./NavBar.js"
import ProductCard from "./ProductCard.js"
import ProductsSection from "./ProductsSection.js"

export default class HomePage {
    constructor () {}

    renderScreen (userLogged) {
        const navbar = new NavBar(userLogged)
        const hero = new HeroSection(userLogged)
        const categories = new Categories()
        const products = new ProductsSection(userLogged)
        
        navbar.render() // render the navbar
        hero.render() // render the hero section
        categories.render() // render the categories section
        products.render() // render the products section
    }
}