var mysql = require('mysql2');

var con = mysql.createConnection({
    user: 'cesargua',
    password: 'password',
    database: 'moviesdb'
});

con.connect();

module.exports = con;