// const mysql = require('mysql2');

// // Setup the database connection
// const dbConfig = {
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'MYSQL_ROOT_PASSWORD',
//     database: process.env.DB_NAME || 'machine-record',
//     port: process.env.DB_PORT || 9906
// };

// const pool = mysql.createPool(dbConfig);
// const promisePool = pool.promise();

// module.exports = promisePool;


const mysql = require('mysql2');
const url = require('url');

// Cloud database URL
const cloudDbUrl = 'mysql://4B3p9rarydHEzHN.root:Pzd4HyiHDCgPe3B6@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/machine-record?ssl={"rejectUnauthorized":true}';

// Parse the cloud database URL
const parsedUrl = new url.URL(cloudDbUrl);

const dbConfig = {
    host: parsedUrl.hostname,
    user: parsedUrl.username,
    password: parsedUrl.password,
    database: parsedUrl.pathname.split('/')[1],
    port: parsedUrl.port,
    ssl: {
        rejectUnauthorized: JSON.parse(parsedUrl.searchParams.get('ssl')).rejectUnauthorized
    }
};

const pool = mysql.createPool(dbConfig);
const promisePool = pool.promise();

module.exports = promisePool;
