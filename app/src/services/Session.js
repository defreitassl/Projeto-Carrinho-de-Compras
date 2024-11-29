export default class Session {
    #currentUser
    #isActive

    constructor () {
        this.#isActive = false
        this.#currentUser = null
    }

    initSession (user) {
        this.#isActive = true
        this.#currentUser = user
        console.log(`A seção de ${this.#currentUser.name} foi inicializada.`)
    }

    endSession () {
        this.#isActive = false
        console.log(`A seção de ${this.#currentUser.name} foi encerrada.`)
    }

    get isActive () {
        return this.#isActive
    }

    get currentUser () {
        return this.#currentUser
    }

    set currentUser (user) {
        if (user instanceof User) {
            this.#currentUser = user
        } else {
            throw new Error('O usuário deve ser uma instância de User')
        }
    }
}