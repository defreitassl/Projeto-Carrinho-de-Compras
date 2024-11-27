import Component from "../Component.js"

export default class ProductsSection extends Component {
    constructor () {
        super(".products-container", `
            <section class="products-section">
                <h2>Nossos produtos</h2>
                <div class="products-inner-container">  
                </div>
            </section> 
        `)
    }
}