import Component from "../Component.js"

export default class OrderHistoryContent extends Component {
    constructor() {
        super(".order-history-container", `
            <div class="order-history-inner-container">
                <h1>Minhas Compras</h1>
                <div class="orders-table">
                    <ul class="orders-list">
                        
                    </ul>
                </div>
            </div>
        `)
    }

    render () {
        const container = document.querySelector(this.outerDivTag)
        this.container.innerHTML = this.content
    }

    remove () {
        this.container.innerHTML = ""
    } 
}