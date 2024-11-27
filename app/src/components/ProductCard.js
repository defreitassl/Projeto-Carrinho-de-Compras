import Component from "./Component.js"

export default class ProductCard extends Component {
    static id = 1
    constructor(imgLink, title, price, description) {
        super(".products-inner-container", `
            <div class="product-card" id="a${ProductCard.id}">
                <div class="product-image">
                    <img src="${imgLink}">
                </div>
                <div class="product-body">
                    <h3>${title}</h3>
                    <p class="price">R$${price}</p>
                    <p class="description">${description}</p>
                </div>
                <div class="product-actions">
                    <button class="buy-button" type="button">Comprar <i class="bi bi-bag-check"></i></button>
                    <button class="add-to-cart-btn" type="button"><i class="bi bi-cart-plus"></i></button>
                </div>
            </div>    
        `)

        this.id = "a" + ProductCard.id
        ProductCard.id++
    }

    render () {
        this.container.innerHTML += this.content
        console.log(`Conteúdo renderizado na tag ${this.outerDivTag}`)
    }

    remove () {
        this.container.querySelector(`#${this.id}`).remove()
        console.log(`Conteúdo removido da tag ${this.outerDivTag}`)
    }
}