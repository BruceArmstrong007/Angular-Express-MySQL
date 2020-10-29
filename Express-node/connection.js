const mysql = require('mysql');

require('dotenv').config();

require("dotenv").config();

//connection to MySQL Server
const mysqlConnection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DATABASE,
    multipleStatements : true
   });

   mysqlConnection.connect((err) => {
     if(err){
      console.log("MySQL Connection is not Established");
     }
     else{
      console.log("MySQL Connection is Established");
     }
   });

   module.exports = mysqlConnection;
