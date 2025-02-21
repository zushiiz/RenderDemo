const mysql = require("mysql2");
const fs = require("fs");

const connection = mysql.createConnection({
  host : process.env.host,
  password : process.env.password,
  user : process.env.user,
  database : process.env.database,
  port : process.env.port,
  ssl: {ca: fs.readFileSync(__dirname + "/mysql-ca.crt")}
});

connection.query("SELECT * FROM test", function(err, res){
  console.log(res);
});

// node --env-file=.env app.js