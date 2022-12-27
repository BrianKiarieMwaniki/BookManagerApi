import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "brian",
  password: `${process.env.brian_mysql_password}`,
  database: "test",
  port: 3306
});

// db.connect((err) => {
//   if (err) console.log(err);
//   else console.log("Connected to mysql server Successfully");
// });

app.get("/book", (req, res) => {
  res.json("hello, this is the backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.data;
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Connected to Server on Port ${process.env.PORT}`);
});
