import http from "http"
import { app } from "../src/app"

const port = getPort(process.env.POST ?? "8000")
var server = http.createServer(app);

server.listen(port);
console.log("server run on port", port)


function getPort(val: string): number {
    const port = parseInt(val, 10);
    return !isNaN(port) && port >= 0 ? port : 8000;
}