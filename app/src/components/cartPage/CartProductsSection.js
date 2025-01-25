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
        this.container.innerHTML += this.content;
    }

    remove () {
        this.container.innerHTML = this.container.innerHTML.replace(this.content, '');
    }

    addEventListener () {
        // Implement event listeners for cart product interactions here
        console.log("Event listeners added for cart products.");
    }
}
