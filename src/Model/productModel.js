import { connect } from "./db.js"

export const getProduct = async () => {
    const sql = "SELECT * FROM products"
    const [row] = await connect.query(sql)
    return row
}