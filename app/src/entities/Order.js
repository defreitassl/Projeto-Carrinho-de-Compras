export default class Order {
    constructor(customer, products, totalPrice) {
        this.customer = customer
        this.products = products
        this.totalPrice = totalPrice
        this.date = new Date()
    }
}