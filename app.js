const mysql = require("mysql2");
const fs = require("fs");
const express = require("express");
const port = 8080;
const app = express();

const connection = mysql.createConnection({
  host : process.env.host,
  password : process.env.password,
  user : process.env.user,
  database : process.env.database,
  port : process.env.port,
  ssl: {ca: fs.readFileSync(__dirname + "/mysql-ca.crt")}
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM test", function(err, result){
    if (err) {
      console.log("error");
    }
    else {
      console.log(result);      
    }

  });
});

app.listen(port);

// node --env-file=.env app.js