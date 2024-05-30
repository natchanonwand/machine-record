const mysql = require('mysql2');

// Setup the database connection
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'MYSQL_ROOT_PASSWORD',
    database: process.env.DB_NAME || 'machine-record',
    port: process.env.DB_PORT || 9906
};

const pool = mysql.createPool(dbConfig);
const promisePool = pool.promise();

module.exports = promisePool;
