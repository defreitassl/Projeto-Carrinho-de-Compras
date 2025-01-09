import Component from "../Component.js"

export default class CartMessage extends Component {
    constructor () {
        super(".cart-inner-container", `
            <div>
                <h2>Seu carrinho está vazio. Adicione produtos para vizualiza-los aqui.</h2>
            </div>
        `)
    }
}