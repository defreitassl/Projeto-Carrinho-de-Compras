import Component from "./Component.js"

export default class NavBar extends Component {
    constructor () {
        super("header", `
            <nav>
                <div class="logo-container">
                    <img src="https://fakestoreapi.com/icons/logo.png" alt="Logo">
                </div>
                <div class="search-bar">
                    <form id="searchForm">
                        <input id="searchFormInput" type="search" placeholder="Buscar produtos...">
                        <button type="submit"><i class="bi bi-search"></i></button>
                    </form>
                </div>
                <ul>
                    <li id="goHomeBtn">Início</li>
                    <div class="account-buttons">
                        <li id="userBtn"><i class="fa-regular fa-user"></i></li>
                        <div class="dropdown-menu">
                            <ul>
                                <li><p id="logoutBtn">Sair da Conta</p></li>
                            </ul>
                        </div>
                        <li id="cartMenuBtn"><i class="bi bi-cart"></i></li>
                    </div>
                </ul>
            </nav>
        `)
    }

    addEventListener (authenticator, app) {
        document.querySelector("#searchForm").addEventListener("submit", (event) => {
            event.preventDefault()

            const searchValue = document.querySelector("#searchFormInput").value
            app.searchProducts(searchValue)
        })

        document.querySelector("#goHomeBtn").addEventListener("click", () => {
            app.goToHomePage(app.session.isActive, null)
        })

        const userBtn = document.querySelector("#userBtn");
        const dropdownMenu = document.querySelector(".dropdown-menu");

        userBtn.addEventListener("click", (event) => {
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        })

        document.addEventListener("click", (event) => {
            if (!userBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = "none";
            }
        })

        document.querySelector("#logoutBtn").addEventListener("click", () => {
            authenticator.logout(app)
            app.goToHomePage(app.session.isActive)
        })

        document.querySelector("#cartMenuBtn").addEventListener("click", () => {
            app.goToCartPage(app.session.isActive)
        })
    }
}