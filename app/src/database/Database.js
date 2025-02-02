import Table from "./Table.js"
import UsersTable from "./UsersTable.js"
import CartsTable from "./CartsTable.js"
import SessionTable from "./SessionTable.js"

export default class Database {
    static users = new UsersTable()
    static carts = new CartsTable()
    static orders = new Table("orders")
    static session = new SessionTable()
}