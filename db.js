const mysql = require("mysql2/promise")

const db = mysql.createPool({
    user:"root",
    host:"localhost",
    password:"admin123",
    database:"students"
})

module.exports = db