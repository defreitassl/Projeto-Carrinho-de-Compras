import Table from "./Table.js"

export default class Database {
    static users = new Table("users")
    static carts = new Table("carts")
    static orders = new Table("orders")   
}