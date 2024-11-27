import HeroSection from "./HeroSection.js"
import Categories from "./Categories.js"
import NavBar from "./NavBar.js"
import ProductCard from "./ProductCard.js"
import ProductsSection from "./ProductsSection.js"

export default class HomePage {
    constructor () {}

    renderScreen (userLogged) {
        const navbar = new NavBar()
        const hero = new HeroSection()
        const categories = new Categories()
        const products = new ProductsSection()
        
        navbar.render() // render the navbar
        !userLogged ? hero.render() : console.log("Usuário já está logado | Hero Section nao será renderizado") // render the hero section case the user is not logged
        categories.render() // render the categories section
        products.render() // render the products section
    }
}