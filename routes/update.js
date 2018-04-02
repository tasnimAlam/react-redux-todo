const express = require("express");
const router = express.Router();
const connection = require("../db_connection");

router.put("/:id", (req, res) => {
  const sql = `UPDATE todos SET completed=1 WHERE id=${req.params.id} `;

  connection.query(sql, err => {
    if (err) {
      throw err;
    } else {
      res.send(req.params.id.toString());
    }
  });
});

module.exports = router;
