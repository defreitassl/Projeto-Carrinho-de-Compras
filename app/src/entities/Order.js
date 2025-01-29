export default class Order {

    static id = 1

    constructor(id, customer, products, totalPrice) {
        this.id = `Or${id}${customer}`
        this.customer = customer
        this.products = products
        this.totalPrice = totalPrice
        this.date = this.formatTodaysDate()
        Order.id++
    }

    formatTodaysDate () {
        const today = new Date()
        const options = { day: 'numeric', month: 'long', year: 'numeric' }
        const formattedDate = today.toLocaleDateString('pt-BR', options).replace(/\b\w/, c => c.toUpperCase())
        return formattedDate
    }
}