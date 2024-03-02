import { getProduct } from "../Model/productModel.js"
import { json } from "node:stream/consumers"

export const index = async (request, response) => {
    response.writeHeader(200)
    return await getProduct()
}

export const createProduct = async (request, response) => {
    const data = await json(request)
    addProduct(data)
}
