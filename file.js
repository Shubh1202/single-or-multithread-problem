// console.log("1")
// function myfunction(){
//     console.log("Inside Function")
// }
// myfunction()
// console.log("2")

const fs = require("fs")
const os = require("os")
// console.log(`Non-Blocking`)
// console.log(`1`)
// const data = fs.writeFile("test.text", "Hello World, this is Asynchronous/non-blocking operation, not block the event loop", (error, data) => {
//     console.log(`Error ==>`, error)
//     console.log(`Data ==>`, data)
// })
// console.log(`non-blocking ==>`, data)
// console.log(`2`)


// Blocking
// console.log(`1`)
// const data = fs.writeFileSync("test.txt", "Hello Node.js, this is blocking or Synchronous operation, block the event loop")
// console.log(`Blocking ==>`, data)
// console.log(`2`)


// //Custom make blcoking using asynchrnouns
// console.log("1")
// async function func(params=null) {
//     try{
//         const data = await fs.writeFile("test.txt", "Hello Node.js, this is making non-blocking to blocking")
//         console.log(`Data ==>`, data)
//     }catch(error){
//         console.log(`Error ==>`, error)
//     }
// }
// func()
// console.log("2")


// console.log(1)
// const data = fs.appendFileSync("test.txt", "Hello node.js, This is Synchronous/Blocking Operation \n")

// const data = fs.appendFile("test.txt", `${new Date().toLocaleDateString() } ==> Hello node.js, This is Synchronous/Blocking Operation \n`, function(error, data){
// console.log(`error ==> `, error)
// console.log(`data ==> `, data)
// })


const file = `${new Date().toLocaleDateString("en-GB").replaceAll("/", "-")}.txt`
const data = fs.appendFileSync(`${file}`, `${new Date().toLocaleString()} ==> Hello Node.js, This is append file Synchronous/Blocking operation that block the event loop \n`)
console.log(`Data ==>`, data)
console.log(2)

fs.appendFile(`${file}`, `${new Date().toLocaleString()} ==> Hello Node.js, This is Asynchronous/Non-Blocking operation that not-block the event loop \n`, (error, data)=>{
    console.log(`Async Error ==>`, error)
    console.log(`Async Data ==>`, data)
})


const fileData = fs.readFile(`${file}`, "utf-8", (error, data) => {
    if(error){
        console.log(`Errro =>`, error)
    }

    console.log(`Data ==> `, data)
})

console.log(os.cpus().length)