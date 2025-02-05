import Component from "../Component.js"

export default class OrderItem extends Component {
    constructor (id, date, imgLink, title, totalPrice) {
        super(".orders-list", `
            <li class="order-item" data-id="${id}">
                <div class="order-date"><p>${date}</p></div>
                <div class="order-main-info">
                    <div class="order-product-image">
                        <img src="${imgLink}" alt="">
                    </div>
                    <div class="order-product-titles">
                        <p>${title}</p>
                    </div>
                    <div class="order-product-button">
                        <p class="order-product-total">Total: <span>R$${totalPrice.toFixed(2)}</span></p>
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
                const orderId = button.closest(".order-item").dataset.id
                app.buyOrderAgain(orderId)
            })
        })
    }
}