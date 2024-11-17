// import Table from "./database/Table.js"

// const usersTable = new Table("users")
// const productsTable = new Table("products")
// const cartsTable = new Table("carts")
// const ordersTable = new Table("orders")

// await usersTable.sendData({
//     id: "agh358",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     password: "password123",
//     cartId: "ab134"
// })
// await usersTable.sendData({
//     id: "acd67",
//     name: "Jason Moores",
//     email: "john.doe@example.com",
//     password: "password123",
//     cartId: "yzbvf"
// })

// const allUsers = await usersTable.getAll()
// console.log(allUsers, "all users ----------")

// const oneUser = await usersTable.getOne("acd67")
// console.log(oneUser, "one user ----------")

// const putUser = await usersTable.updateData("acd67", {
//     name: "Jason Moores updated"
// })
// console.log(putUser, "put user ----------")

// const onePutUser = await usersTable.getOne("acd67")
// console.log(onePutUser, "one user after update ----------")