import { getProduct } from "../Model/productModel.js"

export const index = async (request, response) => {
    return await getProduct()
}
