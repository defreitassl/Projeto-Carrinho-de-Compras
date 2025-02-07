# Projeto Carrinho de Compras

Este é um projeto de **e-commerce** desenvolvido com **JavaScript vanilla** utilizando uma arquitetura modular e orientada a objetos. O objetivo deste projeto é demonstrar conceitos de componentização, operações CRUD via JSON Server, persistência de sessão e integração com APIs externas, servindo como referência para desenvolvedores iniciantes.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
  - [Páginas e Componentes](#páginas-e-componentes)
  - [Gerenciamento de Sessão](#gerenciamento-de-sessão)
  - [Banco de Dados](#banco-de-dados)
  - [Operações e Fluxos](#operações-e-fluxos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Contribuições](#contribuições)
- [Licença](#licença)
- [Contato](#contato)

## Funcionalidades

- **Navegação por Produtos**
  - Busca por categorias (eletrônicos, joias, roupas)
  - Barra de pesquisa integrada
  - Exibição de cards com informações do produto (preço, descrição, avaliação)

- **Carrinho de Compras**
  - Adição e remoção de itens
  - Ajuste de quantidades
  - Cálculo automático do total da compra

- **Autenticação de Usuário**
  - Login e cadastro com validação
  - Sessão persistente (mantém o usuário logado mesmo após recarregar a página)

- **Histórico de Pedidos**
  - Visualização de compras anteriores
  - Botão "Comprar Novamente" que recria o pedido no carrinho

## Arquitetura do Projeto

### Páginas e Componentes

- **HomePage**
  - Renderiza a página inicial com produtos, categorias e uma seção *hero* para usuários não logados.
  
- **LoginPage**
  - Gerencia formulários de login e cadastro com validação.

- **CartPage**
  - Exibe os itens do carrinho, resumo da compra e mensagens para carrinho vazio.
  
- **OrdersPage**
  - Mostra o histórico de pedidos e possibilita a recompra de itens.

#### Componentes Reutilizáveis

- **Component**
  - Classe base que fornece métodos `render()` e `remove()` para manipulação dos elementos da interface.
  
- **ProductCard**
  - Renderiza os cards de produtos e vincula eventos para ações como “Comprar” e “Adicionar ao Carrinho”.
  
- **CartProduct**
  - Gerencia a exibição e atualização dos itens no carrinho.

### Gerenciamento de Sessão

- **Session**
  - Responsável por armazenar dados do usuário e do carrinho em memória, garantindo persistência mesmo após recarregar a página.
  - Os dados da sessão são sincronizados com o JSON Server para manter o estado entre as interações.

### Banco de Dados

O projeto utiliza o **JSON Server** para simular uma API REST. A estrutura do banco é organizada em quatro tabelas:

```json
{
  "users": [],
  "carts": [],
  "orders": [],
  "session": [
    { 
      "id": "s1", 
      "isActive": false,
      "currentUser": null,
      "currentUserCart": null
    }
  ]
}
```

#### Arquitetura OOP para CRUD

- **Table.js (Classe Base)**
    
    - Define operações CRUD genéricas (GET, POST, UPDATE, DELETE) para cada entidade.
- **Classes Especializadas**
    
    - Exemplo: `CartsTable` herda de `Table` e implementa métodos específicos, como `addProduct`, que gerencia a lógica de atualização do carrinho e cálculo do total.

### Operações e Fluxos

- **Adição de Produto ao Carrinho**
    
    - Ao adicionar um produto, o sistema verifica se ele já existe no carrinho. Se existir, incrementa a quantidade; caso contrário, adiciona o novo produto. O total da compra é recalculado e a atualização é persistida via JSON Server.
- **Fluxo de Navegação**
    
    - A classe `App` coordena a transição entre páginas (Home, Login, Carrinho, Pedidos), passando sua instância para os componentes, facilitando a comunicação e execução de métodos globais.
- **Integração com API Externa**
    
    - Os dados de produtos são integrados com a **FakeStore API**, demonstrando a capacidade de consumir serviços externos e reutilizar funções de integração.

## Tecnologias Utilizadas

- **Frontend:** JavaScript Vanilla, HTML5, CSS3
- **Bundling & Transpilação:** Webpack, Babel
- **Mock API:** JSON Server
- **Estilização:** CSS (Flexbox e Grid)
- **Ícones:** Bootstrap Icons, Font Awesome

## Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- npm

### Passos

1. **Clone o repositório:**

``` bash
    git clone https://github.com/defreitassl/Projeto-Carrinho-de-Compras
```
    
2. **Instale as dependências:**

``` bash
	npm install
```
    
3. **Inicie o App:**

```bash
	npm run dev
```

Este comando executa mais três outros comandos inicializando a aplicação por completo.


