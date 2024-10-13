const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root' ,
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'test',
    port: process.env.DB_PORT || 3306,
    connectionLimit: 100,
});

module.exports = {pool};