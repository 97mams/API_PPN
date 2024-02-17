import { createServer } from "node:http"
const port = 3000
const host = 'localhost'

const callBack = (request, response) => {
    const url = request.url
    const route = new URL(url, `http://${host}:${port}`)
    const enPoint = request.method + route.pathname
    switch (enPoint) {
        case 'GET/mams':
            response.end(JSON.stringify({ name: "mams" }))
            break;

        default:
            break;
    }
    response.end()
}

createServer(callBack)
    .listen(port, host, () => {
        console.log(`serve running at http://${host}:${port}`);
    })