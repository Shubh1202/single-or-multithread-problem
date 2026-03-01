const http = require("http")
const fs = require("fs")
const PORT = 3000

const server = http.createServer((req, res) => {
    // console.log(`Before Sync`)

    // // Block the server
    // fs.appendFileSync("./blocking-2.txt", `Synchronous (Blocking) Operation \n`)
    
    // console.log(`After sync operation completed`)


    console.log(`Before Async Operation`)

    // Block the server
    fs.appendFile("./non-blocking-2.txt", `Asynchronous (Non-Blocking) Operation \n`, (err, data) => {
        if(err){
            console.log(`Error inside non-blocking operation`)
        }
        console.log(`**** response from the callback`)
    })
    
    console.log(`After async operation completed`)


    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({ message: "Server testing"}));
})

server.listen(PORT, (err) => {
    if (err) return console.log("Error:", err);
    console.log(`Server listen on port: ${PORT}`)
})