// import Database from "./database/Database"

// const postUser1 = await Database.users.send({
//     id: "agh358",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     password: "password123",
//     cartId: "ab134"
// })
// const postUser2 = await Database.users.send({
//     id: "acd67",
//     name: "Jason Moores",
//     email: "douglas@example.com",
//     password: "password123",
//     cartId: "yzbvf"
// })

// console.log(postUser1)
// console.log(postUser2)

import NavBar from "./components/NavBar.js"
import HeroSection from "./components/HeroSection.js"
import Categories from "./components/Categories.js"
import ProductsSection from "./components/ProductsSection.js"
import ProductCard from "./components/ProductCard.js"

const navbar = new NavBar()
navbar.render() // render the navbar

const hero = new HeroSection()
hero.render() // render the hero section

const categories = new Categories()
categories.render() // render the categories section

const products = new ProductsSection()
products.render() // render the products section

const productCard1 = new ProductCard("https://http2.mlstatic.com/D_Q_NP_2X_851931-MLB78076884574_082024-E.webp", "MacBook", "1000", "Appfjodsnfginsaiogbisgbonbaginefijgasigijafdgijfbgbhdfgbfdasjignfdjingiaobgosafgdsguifbdonjiefnwgjogijownjgefogrble")
productCard1.render() // render the product card

const productCard2 = new ProductCard("https://http2.mlstatic.com/D_Q_NP_2X_851931-MLB78076884574_082024-E.webp", "MacBook", "1000", "Appfjodsnfginsaiogbisgbonbaginefijgasigijafdgijfbgbhdfgbfdasjignfdjingiaobgosafgdsguifbdonjiefnwgjogijownjgefogrble")
productCard2.render() // render the product card

const productCard3 = new ProductCard("https://http2.mlstatic.com/D_Q_NP_2X_851931-MLB78076884574_082024-E.webp", "Produto3", "1000", "Appfjodsnfginsaiogbisgbonbaginefijgasigijafdgijfbgbhdfgbfdasjignfdjingiaobgosafgdsguifbdonjiefnwgjogijownjgefogrble")
productCard3.render() // render the product card

const productCard4 = new ProductCard("https://http2.mlstatic.com/D_Q_NP_2X_851931-MLB78076884574_082024-E.webp", "MacBook", "1000", "Appfjodsnfginsaiogbisgbonbaginefijgasigijafdgijfbgbhdfgbfdasjignfdjingiaobgosafgdsguifbdonjiefnwgjogijownjgefogrble")
productCard4.render() // render the product card

productCard3.remove()