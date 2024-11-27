import Table from "./Table.js"

export default class UsersTable extends Table {
    constructor () {
        super("users")
    }

    async findEmail (email) {
        const allUsers = await this.getAll()
        const user = allUsers.find(user => user.email === email)
        if (user) {
            return user
        } else {
            return false
        }
    }

    async getUserByEmail (email) {
        const userRequired = await this.findEmail(email)
        return userRequired
    }

    async send (userObj) { // Sobreescreve função de POST e verifica se o email a ser cadastrado já existe
        const emailExists = await this.findEmail(userObj.email)
        console.log(emailExists)
        if (emailExists) {
            return {
                status: "ERROR",
                message: "Este email já está em uso"
            }
        }
        const response = await super.send(userObj) // Chama o método original após a verificação ter sido feita
        return response
    }
}
