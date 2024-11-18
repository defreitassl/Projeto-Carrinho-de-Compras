export default class Table {
    #entity
    #url
    constructor (entity) {
        this.#entity = entity
        this.#url = `http://localhost:3000/${entity}`
    }

    get url () {
        return this.#url
    }

    async getAll () {
        try {
            const response = await fetch(this.url)

            if (!response.ok) {
                throw new Error(`Erro ao buscar dados de ${this.#entity}: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()

            return data
        } catch (error) {
            console.log(new Error(`Erro ao buscar dados de ${this.#entity}: ${error}`))
        }
    }

    async getOne (id) {
        try {
            const response = await fetch(`${this.url}/${id}`)

            if (!response.ok) {
                throw new Error(`Erro ao buscar dados de ${this.#entity}: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()
            
            return data
        } catch (error) {
            console.log(new Error(`Erro ao buscar dados de ${this.#entity}: ${error}`))
        }
    }

    async send (dataObj) {
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dataObj)
            })

            if (!response.ok) {
                throw new Error(`Erro ao enviar dados de ${this.#entity}: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()
            
            return {
                status: "OK",
                message: "Dados enviados com sucesso",
                data: data
            }
        } catch (error) {
            return {
                status: "ERROR",
                message: `Erro ao enviar dados de ${this.#entity}: ${error}`
            }
        }
    }

    async update (id, dataObj) {
        try {
            const response = await fetch(`${this.#url}/${id}`, {
                method: 'PATCH',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dataObj)
            })

            if (!response.ok) {
                throw new Error(`Erro ao atualizar dados de ${this.#entity}: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()

            return {
                status: "OK",
                message: "Dados atualizados com sucesso.",
                data: data
            }
        } catch (error) {
            return {
                status: "ERROR",
                message: `Erro ao atualizar dados de ${this.#entity}: ${error}`
            }
        }
    }

    async delete (id) {
        try {
            const response = await fetch(`${this.#url}/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error(`Erro ao deletar dados de ${this.#entity}: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()

            return {
                status: "OK",
                message: "Dados deletados com sucesso.",
                data: data
            }
        } catch (error) {
            return {
                status: "ERROR",
                message: `Erro ao deletar dados de ${this.#entity}: ${error}`
            }
        }
    }
}