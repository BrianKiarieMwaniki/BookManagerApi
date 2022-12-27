const connection = require("../start/db");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const q = "SELECT * FROM books";
  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.data;
  });
});

module.exports = router;
