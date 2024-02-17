import { createServer } from "node:http"
const port = 3000
const host = 'localhost'
createServer(callBack)
    .listen(port, host, () => {
        console.log(`serve running at http://${host}:${port}`);
    })