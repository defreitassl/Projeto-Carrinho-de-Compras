import Component from "../Component.js"

export default class CartProductsSection extends Component {
    constructor () {
        super(".cart-inner-container", `
            <div class="cart-products">
                <h2>Produtos</h2>
                <ul class="cart-products-list">
                    
                </ul>
            </div>
        `)
    }

    render () {
        this.container.innerHTML += this.content
        // console.log(`Conteúdo renderizado na tag ${this.outerDivTag}`)
    }

    remove () {
        this.container.innerHTML -= this.content
        // console.log(`Conteúdo removido da tag ${this.outerDivTag}`)
    }

    addEventListener () {}
}