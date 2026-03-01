const http = require("http")
const fs = require("fs")
const PORT = 3001
const fileName = `${new Date().toLocaleDateString("en-GB").replaceAll("/","-")}.txt`

const server = http.createServer((req, res) => {
    fs.appendFile(`${fileName}`, `${new Date().toLocaleString()} ==> Request url ${req.url}\n`, (error, data) => {
        switch(req.url){
            case "/":
                res.end("Home Page")
            break;
            case "/about": 
                res.end("About Page")
            break;
            default:
                res.end("404 Page not found")
        }
    })

    // fs.appendFileSync(`${fileName}`, `${new Date().toLocaleString()} ==> Blocking Operation \n`)
    // switch(req.url){
    //     case "/":
    //         res.end("Home Page")
    //     break;
    //     case "/about": 
    //         res.end("About Page")
    //     break;
    //     default:
    //         res.end("404 Page not found")
    // }
})

server.listen(PORT, (error) => {
    if(error){
        console.log(`Error ==>`, error)
    }
    console.log(`Server connected`)
})