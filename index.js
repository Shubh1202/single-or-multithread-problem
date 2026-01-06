console.log("Hello 1")

// function handlePromise(){
//     return new Promise((resolve, reject) => {
//         fetch(`https://www.google.com`)
//         .then((data) => resolve(`Resolve data => ${data}`))
//         .catch((error) => reject(`Rejected data => ${error}`))
//     })
// }

// function func(req, res, callback){
//     callback()
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }

async function handlePromise(){
    // return await fetch(`https://www.google.com`)
    return await fetch(`https://www.news.google.com`)
}

async function func(req, res, callback){
    try{
        const res = await callback()
        console.log(`Response ==> ${res}`)
    }catch(error){
        console.log(`Error => ${error}`)
    }
}


let req, res
func(req, res, handlePromise)

console.log("Hello 2")