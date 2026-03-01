const http = require("http")
const fs = require("fs")
process.env.UV_THREADPOOL_SIZE = 64
const PORT = 3000

const server = http.createServer(async(req, res) => {
    try{
        if(req.url!="/favicon.ico"){
            console.log(req.url)
            console.log(`Before Async Operation`)
            fs.readFile("./non-blocking-1.txt", "utf-8", (err, data) => {
                res.writeHead(200, {"Content-Type": "application/json"})
                res.end(JSON.stringify({message: "File read suffessfully"}))
            });
            console.log(`After Asynchronous operation`)
        }
    }catch(err){
        console.log(`Error inside server`, err)
        res.writeHead(500)
        res.end(`Internal server error ${JSON.stringify(err)}`)
    }
})

server.listen(PORT, (err) => {
    console.log(`Server listine on port ${PORT}`)
})