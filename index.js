const express = require("express");
// import mysql from "mysql";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Connected to Server on Port ${process.env.PORT}`);
});

require("./start/routes")(app);
