import OrderHistoryContent from "./OrderHistoryContent.js"
import NavBar from "../NavBar.js"

export default class OrdersPage {
    constructor () {
        this.navbar = new NavBar()
        this.innerContent = null
    }

    renderScreen (app) {
        if (app.session.currentUser.orders.length > 0) {
            this.navbar.render()
            this.innerContent = new OrderHistoryContent()
            this.innerContent.render()
            const ordersContainer = document.querySelector(".order-history-container")
            ordersContainer.style.display = "flex"
        } else {
            app.goToHomePage(app.session.isActive, null)
            this.showMessage("Você ainda não tem nenhum pedido registrado.")
        }
    }

    cleanScreen () {
        this.navbar.remove()
        if (this.innerContent) {
            this.innerContent.remove()
        }
    }

    addEventListeners(authenticator, app) {
        this.navbar.addEventListener(authenticator, app)
    }

    showMessage (message) {    
        const alertContainer = document.querySelector("#alert-container");
        alertContainer.textContent = message;
        alertContainer.classList.add("show");

        setTimeout(() => {
            alertContainer.classList.remove("show");
        }, 3000);
    }
}