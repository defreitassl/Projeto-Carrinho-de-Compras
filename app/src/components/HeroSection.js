import Component from "./Component.js"

export default class HeroSection extends Component {
    constructor() {
        super(".hero-container", `
            <section class="hero">
                <div class="hero-body">
                    <div class="hero-text">
                        <h1>Tudo que você precisa em um só lugar...</h1>
                        <p>Encontre produtos incríveis e aproveite as melhores ofertas!</p>
                    </div>
                    <div class="hero-image-box">
                        <img src="https://fakestoreapi.com/icons/intro.svg" alt="Imagem relacionada a compras online">
                    </div>
                </div>
                <div class="hero-buttons">
                    <button>Fazer Login</button>
                    <button>Criar conta</button>
                </div>
            </section>    
        `)
    }
}