import Component from "../Component.js"

export default class CartResume extends Component {
    constructor (productsNum, subTotal, total) {
        super(".cart-inner-container", `
            <div class="cart-resume">
                <h2>Resumo da Compra</h2>
                <div class="cart-resume-info">
                    <p class="cart-resume-quantity">Produtos: <strong>${productsNum}</strong></p>
                    <p class="cart-resume-subtotal">Subtotal: <strong>R$ ${subTotal}</strong></p>
                    <p class="cart-resume-discount">Desconto: <strong>R$ 0,00</strong></p>
                </div>
                <div class="cart-resume-button">
                    <p class="cart-resume-total">Total: <strong>R$ ${total}</strong></p>
                    <button class="checkout-button">Finalizar Compra</button>
                </div>
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