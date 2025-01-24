import Component from "../Component.js"

export default class CartProduct extends Component {
    constructor (id, title, price, imgSrc, quantity) {
        super(".cart-products-list", `
                <li class="product-item" id="${id}">
                    <div class="cart-product-img">
                        <img src="${imgSrc}" alt="">
                    </div>
                    
                    <div class="cart-product-content">
                        <h3 class="product-title">${title}</h3>
                        <p class="product-price">R$ ${price}</p>
                        <div class="product-quantity">
                            <button class="minus-button">-</button>
                            <p class="product-quantity-input">${quantity}</p>
                            <button class="plus-button">+</button>
                        </div>
                        <div class="cart-product-buttons">
                            <button class="remove-button">Remover</button>
                        </div>
                    </div>
                </li>
        `)
        this.id = id
    }

    render () {
        this.container.innerHTML += this.content
    }

    static async addEventListener(app) {
        const minusButtons = document.querySelectorAll(".minus-button");
        const plusButtons = document.querySelectorAll(".plus-button");
        const removeButtons = document.querySelectorAll(".remove-button")
    
        minusButtons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const productItem = event.target.closest(".product-item")
                const id = productItem.id
                const quantityInput = event.target.nextElementSibling
                let quantity = parseInt(quantityInput.innerText)
                quantity--
                quantityInput.innerText = quantity
                app.session.currentUserCart.updateProductQuantity(app, id, quantity)
                await app.authenticator.updateCartInfo(app, app.session.currentUserCart.toJSON())
                app.goToCartPage()
            })
        })
    
        plusButtons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const productItem = event.target.closest(".product-item")
                const id = productItem.id
                const quantityInput = event.target.previousElementSibling
                let quantity = parseInt(quantityInput.innerText)
                quantity++
                quantityInput.innerText = quantity
                app.session.currentUserCart.updateProductQuantity(app, id, quantity)
                await app.authenticator.updateCartInfo(app, app.session.currentUserCart.toJSON())
                app.goToCartPage()
            });
        });

        removeButtons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const productItem = event.target.closest(".product-item")
                const id = productItem.id
            })
        })
    }
}
