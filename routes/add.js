const express = require("express");
const router = express.Router();
const connection = require("../db_connection");

router.post("/", function(req, res) {
  const { task, completed } = req.body;

  const sql = `INSERT INTO todos(task,completed) VALUES(${task}, ${completed})`;

  connection.query(sql, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.send("ROW INSERTED !!");
    }
  });
});

module.exports = router;
