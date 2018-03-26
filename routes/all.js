const express = require("express");
const router = express.Router();
const connection = require("../db_connection");

router.get("/", function(req, res, next) {
  const sql = `SELECT * from todos`;

  connection.query(sql, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
