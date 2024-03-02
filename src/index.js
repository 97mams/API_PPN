import { createServer } from "node:http"
import { index } from "./Controller/product.js"
const port = 3000
const host = 'localhost'

const callBack = async (request, response) => {
    try {
        const url = new URL(request.url, `http://${request.headers.host}`)
        const endPoint = `${request.method}:${url.pathname}`
        response.setHeader('content-type', 'application/json')
        let results
        switch (endPoint) {
            case 'GET:/products':
                results = await index(request, response)
                break;

            default:
                break;
        }
        if (results) {
            response.write(JSON.stringify(results))
        }
    } catch (error) {
        response.writeHead(400)
        console.log(error);
    }
    response.end()
}

createServer(callBack)
    .listen(port, host, () => {
        console.log(`serve running at http://${host}:${port}`);
    })