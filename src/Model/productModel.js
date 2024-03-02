import { connect } from "./db.js"

/**
 * @return {Promise<Products>}
 */
export const getProduct = async () => {
    const sql = "SELECT * FROM products"
    const [row] = await connect.query(sql)
    return row
}

/**
 * @param {{name: string, type: string, price:Number}} params
 * @return {Promise<Products>}
 */
export const addProduct = async ({ name, type, price }) => {
    const sql = "INSERTE INTO products(name, type, price) VALUES(?,?,?)"
    const [row] = connect.query(sql, [name, type, parseFloat(price)])
    console.log(row);
}