import Component from "../Component.js"

export default class Categories extends Component {
    constructor() {
        super(".categories-container", `
            <section class="categories-section">
                <div class="categories-inner-container">
                    <div class="category-box">
                        <h3>Eletrônicos</h3>
                        <i class="bi bi-pc-display"></i>
                    </div>
        
                    <div class="category-box">
                        <h3>Jóias</h3>
                        <i class="bi bi-gem"></i>
                    </div>
        
                    <div class="category-box">
                        <h3>Roupas Masculinas</h3>
                        <i class="bi bi-gender-male"></i>
                    </div>
        
                    <div class="category-box">
                        <h3>Roupas Femininas</h3>
                        <i class="bi bi-gender-female"></i>
                    </div>
                </div>
            </section>    
        `)
    }
}