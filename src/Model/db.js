import sqlite3 from "sqlite3";

const dbName = "apiPPN.db"

let db = new sqlite3.Database(dbName, err => {
    if (err) throw err

    console.log('Database started on: ', dbName)

    db.run('DROP TABLE products')

    // db.run('INSERT INTO products(name, price) VALUES(?, ?)', ['vary gasy', 3000])
    // db.get('SELECT * FROM products', (err, data) => {
    //     if (err) throw err

    //     console.log(data);
    // })
})

