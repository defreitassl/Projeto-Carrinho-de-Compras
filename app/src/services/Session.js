import User from "../entities/User.js"

export default class Session {
    #currentUser
    #isActive

    constructor () {
        this.#isActive = false
        this.#currentUser = null
    }

    initSession (user) {
        if (user instanceof User) {
            this.#isActive = true
            this.#currentUser = user
            console.log(`A seção de ${this.#currentUser.name} foi inicializada.`)
        } else {
            throw new Error("O usuário para iniciar a sessão deve ser uma instância de User.")
        }
    }

    endSession () {
        this.#isActive = false
        console.log(`A seção de ${this.#currentUser.name} foi encerrada.`)
        this.#currentUser = null
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