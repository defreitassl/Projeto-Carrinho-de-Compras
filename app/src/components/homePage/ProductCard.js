import Component from "../Component.js"

export default class ProductCard extends Component {

    constructor(id, imgLink, title, price, description, rating) {
        super(".products-inner-container", `
            <div class="product-card" id="a${id}">
                <div class="product-image">
                    <img src="${imgLink}">
                </div>
                <div class="product-body">
                    <h3>${title}</h3>
                    <p class="price">R$${price}</p>
                    <p class="description">${description}</p>
                    <p class="rating"><i class="bi bi-star-fill"></i>${rating}/5</p>
                </div>
                <div class="product-actions">
                    <button class="buy-button" type="button">Comprar <i class="bi bi-bag-check"></i></button>
                    <button class="add-to-cart-btn" type="button"><i class="bi bi-cart-plus"></i></button>
                </div>
            </div>    
        `)

        this.id = "a" + id
    }

    render () {
        this.container.innerHTML += this.content
        console.log(`Conteúdo renderizado na tag ${this.outerDivTag}`)
    }

    remove () {
        this.container.querySelector(`#${this.id}`).remove()
        console.log(`Conteúdo removido da tag ${this.outerDivTag}`)
    }

    static addEventListener (app) {
        const allProducts = document.querySelectorAll(".product-card")
        allProducts.forEach(product => {
            const addToCartButton = product.querySelector(".add-to-cart-btn")
            addToCartButton.addEventListener("click", (event) => {
                event.preventDefault()
                const productId = product.getAttribute("id")
                const price = Number(product.querySelector(".price").innerText.replace("R$", "").replace(",", "."))
                if (app.session.isActive) {
                    app.addProductToCart(productId, price)
                } else {
                    app.goToLoginPage()
                }
            })

            const buyButton = product.querySelector(".buy-button")
            buyButton.addEventListener("click", (event) => {
                event.preventDefault()
                const productId = product.getAttribute("id")
                const price = Number(product.querySelector(".price").innerText.replace("R$", "").replace(",", "."))
                if (app.session.isActive) {
                    app.addProductToCart(productId, price)
                } else {
                    app.goToLoginPage()
                }
            })
        })
    }
}