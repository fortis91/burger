const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();

// const log = require('../util/logger')

const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_SECRET = process.env.MYSQL_SECRET;

let connection = null;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: MYSQL_USER,
        password: MYSQL_SECRET,
        database: "burgers_db"
    
    })
};

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting to database: " + err.stack);
        return;
    }
    console.log('Successfully connected to mysql database ' + connection.config.database + ' on '
        + connection.config.host + ":" + connection.config.port + ' as '
        + connection.config.user + ' with id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;