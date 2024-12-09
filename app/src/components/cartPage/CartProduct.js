import Component from "../Component.js"

export default class CartProduct extends Component {
    constructor () {
        super(".cart-products-list", `
                <li class="product-item">
                    <div class="cart-product-img">
                        <img src="https://http2.mlstatic.com/D_Q_NP_2X_935514-MLA76813025514_062024-E.webp" alt="">
                    </div>
                    
                    <div class="cart-product-content">
                        <h3 class="product-title">Adaptador Tipo C Ligar Pendrive Teclado Em Celular Notebook Cor Branco</h3>
                        <p class="product-price">R$ 45,00</p>
                        <div class="product-quantity">
                            <button class="minus-button">-</button>
                            <p class="product-quantity-input">1</p>
                            <button class="plus-button">+</button>
                        </div>
                        <div class="cart-product-buttons">
                            <button class="remove-button">Remover</button>
                        </div>
                    </div>
                </li>
        `)
    }

    addEventListener () {}
}