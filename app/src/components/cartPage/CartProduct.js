import Component from "../Component.js"

export default class CartProduct extends Component {
    constructor (title, price, imgSrc) {
        super(".cart-products-list", `
                <li class="product-item">
                    <div class="cart-product-img">
                        <img src="${imgSrc}" alt="">
                    </div>
                    
                    <div class="cart-product-content">
                        <h3 class="product-title">${title}</h3>
                        <p class="product-price">R$ ${price}</p>
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