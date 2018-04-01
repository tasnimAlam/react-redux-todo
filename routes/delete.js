const express = require("express");
const router = express.Router();
const connection = require("../db_connection");

router.delete("/", (req, res) => {
  const { id } = req.body;
  const sql = `DELETE FROM todos WHERE id=${id}`;

  connection.query(sql, err => {
    if (err) {
      throw err;
    } else {
      res.send(id.toString());
    }
  });
});

module.exports = router;
