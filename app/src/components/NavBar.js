import Component from "./Component.js"

export default class NavBar extends Component {
    constructor () {
        super("header", `
            <nav>
                <div class="logo-container">
                    <img src="https://fakestoreapi.com/icons/logo.png" alt="Logo">
                </div>
                <div class="search-bar">
                    <input type="search" placeholder="Buscar produtos...">
                    <i class="bi bi-search"></i>
                </div>
                <ul>
                    <li>Início</li>
                    <div class="account-buttons">
                        <li><i class="fa-regular fa-user"></i></li>
                        <li><i class="bi bi-cart"></i></li>
                    </div>
                </ul>
            </nav>
        `)    
    }
}