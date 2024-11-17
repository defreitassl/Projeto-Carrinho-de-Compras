export default class FakeStoreApi {

    static url = "https://fakestoreapi.com/products"

    static async getAllProducts () {
        try {
            const response = await fetch(FakeStoreApi.url)
        
            if (!response.ok) {
                throw new Error("Erro ao buscar produtos: "+response.status+response.statusText)
            }

            const data = await response.json()

            return data
        } catch (error) {
            console.log(new Error("Erro ao buscar produtos: "+error))
        }
    }

    static async getOneProduct (id) {
        try {
            const response = await fetch(`${FakeStoreApi.url}/${id}`)

            if (!response.ok) {
                throw new Error("Erro ao buscar produto: "+response.status+response.statusText)
            }

            const data = await response.json()

            return data
        } catch (error) {
            console.log(new Error("Erro ao buscar produto: "+error))
        }
    }

    static async getCategories () {
        try {
            const response = await fetch(`${FakeStoreApi.url}/categories`)

            if (!response.ok) {
                throw new Error("Erro ao buscar categorias: "+response.status+response.statusText)
            }

            const data = await response.json()

            return data
        } catch (error) {
            console.log(new Error("Erro ao buscar categorias: "+error))
        }
    }

    static async getProductsByCategory (category) {
        try {
            const response = await fetch(`${FakeStoreApi.url}/category/${category}`)

            if (!response.ok) {
                throw new Error("Erro ao buscar produtos por categoria: "+response.status+response.statusText)
            }

            const data = await response.json()

            return data
        } catch (error) {
            console.log(new Error("Erro ao buscar produtos por categoria: "+error))
        }
    }
}

const categorias = await FakeStoreApi.getOneProduct(6)
console.log(categorias)