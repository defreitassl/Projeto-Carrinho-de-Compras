import Table from "./Table.js"

export default class UsersTable extends Table {
    constructor () {
        super("session")
    }

    async registerSession (session) {
        const response = await super.update("s1", session)

        if (response.status === "OK") {
            return response
        } else {
            throw new Error("Erro ao registrar sessão no banco de dados " + response.message)
        }
    }

    async unregisterSession (session) {
        const response = await super.update("s1", session)

        if (response.status === "OK") {

        } else {
            throw new Error("Erro ao registrar sessão no banco de dados " + response.message)
        }
    }

    async getSession () {
        return await super.getOne("s1")
    }
}