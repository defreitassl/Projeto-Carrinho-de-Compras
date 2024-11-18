import Table from "./Table.js"
import UsersTable from "./UsersTable.js"

export default class Database {
    static users = new UsersTable()
    static carts = new Table("carts")
    static orders = new Table("orders")   
}