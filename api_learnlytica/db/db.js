
var mysql = require('mysql');


// let myconnect = function () {
//   var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'api_learn',
//     insecureAuth: true
//   });
//   return connection;

// };


require('dotenv').config();

// console.log(process.env)

let mysqlConnect = function () {
    return mysql.createConnection({
       
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD, //should be yours 
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        insecureAuth: true
    });
};

// module.exports.localConnect = myconnect;

module.exports.localConnect = mysqlConnect;