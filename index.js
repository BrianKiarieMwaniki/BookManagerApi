const express = require("express");
const cors = require("cors");
// import mysql from "mysql";

const app = express();

const PORT = process.env.PORT || 5500;

app.use(cors())

app.listen(PORT, () => {
  console.log(`Connected to Server on Port ${PORT}`);
});

require("./start/routes")(app);
