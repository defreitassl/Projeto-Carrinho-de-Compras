import Component from "../Component.js";

export default class CartResume extends Component {
    constructor(cart, app) {
        const productsNum = cart.products.reduce((acc, product) => acc + Number(product.quantity), 0)
        const subTotal = cart.totalPrice
        const total = subTotal

        super(".cart-inner-container", `
            <div class="cart-resume">
                <h2>Resumo da Compra</h2>
                <div class="cart-resume-info">
                    <p class="cart-resume-quantity">Produtos: <strong>${productsNum}</strong></p>
                    <p class="cart-resume-subtotal">Subtotal: <strong>R$ ${subTotal.toFixed(2)}</strong></p>
                    <p class="cart-resume-discount">Desconto: <strong>R$ 0,00</strong></p>
                </div>
                <div class="cart-resume-button">
                    <p class="cart-resume-total">Total: <strong>R$ ${total.toFixed(2)}</strong></p>
                    <button class="checkout-button">Finalizar Compra</
                    </button>
                </div>
            </div>
        `)

        this.cart = cart
        this.app = app
    }

    render () {
        this.container.innerHTML += this.content
        // console.log(`Conteúdo renderizado na tag ${this.outerDivTag}`)
    }

    remove () {
        this.container.innerHTML = ""
        // console.log(`Conteúdo removido da tag ${this.outerDivTag}`)
    }

    addEventListener() {
        const checkoutButton = document.querySelector(".checkout-button");
        checkoutButton.addEventListener("click", () => {
            this.cart.clearCart()
            this.app.authenticator.updateCartInfo(this.app, this.cart)
            this.app.cartPage.showMessage("Compra realizada com sucesso!");
            this.app.goToCartPage();
        });
    }
}