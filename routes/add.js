const express = require("express");
const router = express.Router();
const connection = require("../db_connection");

router.post("/", (req, res) => {
  const { task } = req.body;

  const sql = `INSERT INTO todos(task,completed) VALUES("${task}", 0)`;

  connection.query(sql, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.send(task);
    }
  });
});

module.exports = router;
