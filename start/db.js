const mysql = require("mysql");

const dbconfig = {
  host: "localhost",
  user: "brian",
  password: `${process.env.brian_mysql_password}`,
  database: "test",
  port: 3306,
};


const connection = mysql.createPool(dbconfig);

connection.on("connection", (conn)=>{
    console.log("DB Connection established Successfully!");
})

connection.on("error", err =>{ console.error(err.code);})

connection.on("close", err =>(console.error(err)));

module.exports = connection;