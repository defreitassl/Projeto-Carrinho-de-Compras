import Component from "../Component.js"

export default class OrderItem extends Component {
    constructor (date, imgLink, title, totalPrice) {
        super(".orders-list", `
            <li class="order-item">
                <div class="order-date"><p>${date}</p></div>
                <div class="order-main-info">
                    <div class="order-product-image">
                        <img src="${imgLink}" alt="">
                    </div>
                    <div class="order-product-titles">
                        <p>${title}</p>
                    </div>
                    <div class="order-product-button">
                        <p class="order-product-total">Total: <span>R$${totalPrice}</span></p>
                        <button class="buy-again-button">Comprar Novamente</button>
                    </div>
                </div>
            </li>
        `)
    }

    render () {
        this.container.innerHTML += this.content
    }

    static addEventListeners (app) {
        const buyAgainButtons = document.querySelectorAll(".buy-again-button")

        buyAgainButtons.forEach((button) => {
            button.addEventListener("click", () => {
                console.log("aaa")
            })
        })
    }
}