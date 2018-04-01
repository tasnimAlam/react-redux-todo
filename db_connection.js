const mysql = require("mysql");

let connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "jjj",
  database: "todo_db"
});

module.exports = connection;
