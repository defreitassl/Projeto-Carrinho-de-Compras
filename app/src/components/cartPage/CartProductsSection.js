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
        console.log("Rendering Cart Products Section..."); // Debugging log
        this.container.innerHTML += this.content;
    }

    remove () {
        console.log("Removing Cart Products Section..."); // Debugging log
        this.container.innerHTML = this.container.innerHTML.replace(this.content, '');
        console.log(`Conteúdo removido da tag ${this.outerDivTag}`);
    }

    addEventListener () {
        // Implement event listeners for cart product interactions here
        console.log("Event listeners added for cart products.");
    }
}
