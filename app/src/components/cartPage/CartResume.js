import Component from "../Component.js";

export default class CartResume extends Component {
    constructor(cart, app) {
        // Calcula o número total de produtos (somando as quantidades)
        const productsNum = cart.products.reduce((acc, product) => acc + product.quantity, 0)

        // Calcula o subtotal (preço * quantidade de cada produto)
        console.log(cart.products)
        const subTotal = cart.products.reduce((acc, product) => acc + (product.price * product.quantity), 0)

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
        this.container.innerHTML -= this.content
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