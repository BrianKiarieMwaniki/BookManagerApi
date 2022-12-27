const connection = require("../start/db");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const q = "SELECT * FROM books";
  connection.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

router.post("/", (req,res) =>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES(?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ];

    connection.query(q,[values], (err, data) =>{
        if(err) return res.json(err);
        return res.json("Book has been created successfully");
    })
})

module.exports = router;
