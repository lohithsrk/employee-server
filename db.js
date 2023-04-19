const mysql = require("mysql2/promise")

const db = mysql.createPool({
    user:"admin",
    host:"localhost",
    password:"admin123",
    database:"employee"
})

module.exports = db