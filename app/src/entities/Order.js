export default class Order {

    static id = 1

    constructor(customer, products, totalPrice) {
        this.id = `Or${Order.id}${customer}`
        this.customer = customer
        this.products = products
        this.totalPrice = totalPrice
        this.date = new Date()
        Order.id++
    }
}