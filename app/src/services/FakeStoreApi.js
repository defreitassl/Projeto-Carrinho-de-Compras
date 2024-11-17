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

    static async registerProduct (objProduct) {
        try {
            const response = await fetch(`${FakeStoreApi.url}`, {
                method: 'POST',
                body: JSON.stringify(objProduct)
            })

            if (!response.ok) {
                throw new Error("Erro ao cadastrar produto: "+response.status+response.statusText)
            }

            const data = await response.json()

            return {
                status: "OK",
                message: "Produto cadastrado com sucesso "+response.status,
                data: data
            }
        } catch (error) {
            return {
                status: "ERROR",
                message: "Erro ao cadastrar produto: "+error
            }
        }
    }

    static async updateProduct (objProduct) {
        try {

            let response

            if (objProduct.title && objProduct.price && objProduct.category && objProduct.description && objProduct.image) {
                console.log("Utilizando o método PUT")
                response = await fetch(`${FakeStoreApi.url}/${objProduct.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(objProduct)
                })
            } else {
                console.log("Utilizando o método PATCH")
                response = await fetch(`${FakeStoreApi.url}/${objProduct.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(objProduct)
                })
            }

            if (!response.ok) {
                throw new Error("Erro ao atualizar produto: "+response.status+response.statusText)
            }

            const data = await response.json()

            return {
                status: "OK",
                message: "Produto atualizado com sucesso "+response.status,
                data: data
            }
            
        } catch (error) {
            return {
                status: "ERROR",
                message: "Erro ao atualizar produto: "+error
            }
        }
    }

    static async deleteProduct (id) {
        try {
            const response = await fetch(`${FakeStoreApi.url}/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error("Erro ao deletar produto: "+response.status+response.statusText)
            }

            const data = await response.json()

            return {
                status: "OK",
                message: "Produto deletado com sucesso "+response.status,
                data: data
            }

        } catch (error) {
            return {
                status: "ERROR",
                message: "Erro ao deletar produto: "+error
            }
        }
    }
}