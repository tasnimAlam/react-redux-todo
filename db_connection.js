const mysql = require("mysql");

let connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo_db"
});

module.exports = connection;
