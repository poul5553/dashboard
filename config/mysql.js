const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "heka",
    password: "password",
    database: "dashboard"
});

connection.connect();

module.exports = connection;