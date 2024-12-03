import Component from "../Component.js"

export default class Categories extends Component {
    constructor() {
        super(".categories-container", `
            <section class="categories-section">
                <div class="categories-inner-container">

                    <div class="category-box all">
                        <h3>Todos</h3>
                    </div>

                    <div class="category-box filter" data-category="electronics">
                        <h3>Eletrônicos</h3>
                        <i class="bi bi-pc-display"></i>
                    </div>
        
                    <div class="category-box filter" data-category="jewelery">
                        <h3>Jóias</h3>
                        <i class="bi bi-gem"></i>
                    </div>
        
                    <div class="category-box filter" data-category="men's clothing">
                        <h3>Roupas Masculinas</h3>
                        <i class="bi bi-gender-male"></i>
                    </div>
        
                    <div class="category-box filter" data-category="women's clothing">
                        <h3>Roupas Femininas</h3>
                        <i class="bi bi-gender-female"></i>
                    </div>
                </div>
            </section>    
        `)
    }

    addEventListener (app) {
        const categoriesBoxes = document.querySelectorAll(".filter")
        categoriesBoxes.forEach(categoryBox => {
            categoryBox.addEventListener("click", () => {
                const category = categoryBox.dataset.category
                app.getProductByCategory(category)
            })
        })

        document.querySelector(".all").addEventListener("click", () => {
            app.goToHomePage()
        })
    }
}