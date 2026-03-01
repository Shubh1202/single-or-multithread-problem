process.env.UV_THREADPOOL_SIZE = 64;
const http = require("http")
const fs = require("fs")
const PORT = 3000

const server = http.createServer((req, res) => {
     console.log(`Before Async Operation`)

    // Non-Blocking the server
    fs.readFile("./non-blocking-1.txt", `utf-8`, (err, data) => {

    })
    
    console.log(`After async operation completed`)

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({ message: "Server testing"}));
})

server.listen(PORT, (err) => {
    if (err) return console.log("Error:", err);
    console.log(`Server listen on port: ${PORT}`)
})