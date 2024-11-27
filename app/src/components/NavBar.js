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
                    <li>
                        <select id="categoriesSelect">
                            <option value="all" selected disabled>Categorias:</option>
                            <option value="jewelery">Jóias</option>
                            <option value="electronics">Eletrônicos</option>
                            <option value="men's clothing">Roupas Masculinas</option>
                            <option value="women's clothing">Roupas Femininas</option>
                        </select>
                    </li>
                    <div class="account-buttons">
                        <li><i class="fa-regular fa-user"></i></li>
                        <li><i class="bi bi-cart"></i></li>
                    </div>
                </ul>
            </nav>
        `)
    }
}