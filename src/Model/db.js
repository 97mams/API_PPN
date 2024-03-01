import mysql from 'mysql2'

export const connect = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'apiPPN'
}).promise()

