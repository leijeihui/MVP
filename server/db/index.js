var mysql = require('mysql');

var dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'overflow'
});

dbConnection.connect();

module.exports = dbConnection;