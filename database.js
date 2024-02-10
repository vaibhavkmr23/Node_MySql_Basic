const mysql = require("mysql2")
const pool = mysql.createPool({
    host: "localhost",
    database: "Node_Mysql",
    password: "23101995",
    user: "root",
})

module.exports = pool.promise()

// Schemas is same as Database in mYsql workbench