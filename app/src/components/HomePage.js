const homePageHeader = `    
    <header>
        <nav>
            <div class="logo-container">
                <img src="./assets/images/logo.png" alt="Logo">
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
    </header>
`

const homePageMain = `
    <main>
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

        <section class="products-section">
            <h2>Nossos produtos</h2>
            <div class="products-inner-container">
                <div class="product-box">
                    <div class="product-image">
                        <img src="https://http2.mlstatic.com/D_Q_NP_2X_851931-MLB78076884574_082024-E.webp">
                    </div>
                    <div class="product-body">
                        <h3>Produto 1</h3>
                        <p class="price">R$ 100,00</p>
                        <p class="description">Frete grátis</p>
                    </div>
                    <div class="product-actions">
                        <button class="buy-button" type="button">Comprar <i class="bi bi-bag-check"></i></button>
                        <button class="add-to-cart-btn" type="button"><i class="bi bi-cart-plus"></i></button>
                    </div>
                </div>

                <div class="product-box">
                    <div class="product-image">
                        <img src="https://http2.mlstatic.com/D_Q_NP_2X_851931-MLB78076884574_082024-E.webp">
                    </div>
                    <div class="product-body">
                        <h3>Produto 1</h3>
                        <p class="price">R$ 100,00</p>
                        <p class="description">Frete grátis</p>
                    </div>
                    <div class="product-actions">
                        <button class="buy-button" type="button">Comprar <i class="bi bi-bag-check"></i></button>
                        <button class="add-to-cart-btn" type="button"><i class="bi bi-cart-plus"></i></button>
                    </div>
                </div>

                <div class="product-box">
                    <div class="product-image">
                        <img src="https://http2.mlstatic.com/D_Q_NP_2X_851931-MLB78076884574_082024-E.webp">
                    </div>
                    <div class="product-body">
                        <h3>Produto 1</h3>
                        <p class="price">R$ 100,00</p>
                        <p class="description">Frete grátis</p>
                    </div>
                    <div class="product-actions">
                        <button class="buy-button" type="button">Comprar <i class="bi bi-bag-check"></i></button>
                        <button class="add-to-cart-btn" type="button"><i class="bi bi-cart-plus"></i></button>
                    </div>
                </div>

                <div class="product-box">
                    <div class="product-image">
                        <img src="https://http2.mlstatic.com/D_Q_NP_2X_851931-MLB78076884574_082024-E.webp">
                    </div>
                    <div class="product-body">
                        <h3>Produto 1</h3>
                        <p class="price">R$ 100,00</p>
                        <p class="description">Frete grátis</p>
                    </div>
                    <div class="product-actions">
                        <button class="buy-button" type="button">Comprar <i class="bi bi-bag-check"></i></button>
                        <button class="add-to-cart-btn" type="button"><i class="bi bi-cart-plus"></i></button>
                    </div>
                </div>
            </div>
        </section>        
    </main>
`