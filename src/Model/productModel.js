import { connect } from "./db.js"


/**
 * return <promise>
 */
export const getProduct = () => {
    const sql = "SELECT * FROM products"
    const [row] = connect.query(sql)
    return row
}