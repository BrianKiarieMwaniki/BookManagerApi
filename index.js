const express = require("express");
const cors = require("cors");
const db = require("./models");

global.__basedir = __dirname;


const app = express();

const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.urlencoded({extended:true}));

db.sequelize.sync();

app.listen(PORT, () => {
  console.log(`Connected to Server on Port ${PORT}`);
});

require("./start/routes")(app);
