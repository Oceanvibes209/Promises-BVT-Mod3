//Promise
let P = new Promise((resolve,reject)=> {
    let a = 1+1;
    if (a==2){
        resolve ('Success')
    } else {
        reject ('Failed')
    }
})

P.then ((message) =>{
    console.log('This message is in the then ' + message)
}).catch ((message) =>{
    console.log('This message is in the catch ' + message)
})

/* If a Promise resolves the 'then' message will be called, the 'catch' will be called if the promise is rejected */

const recordVideoOne = new Promise ((resolve, reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise ((resolve, reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise ((resolve, reject) => {
    resolve('Video 3 recorded')
})

//Promise.all
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then ((messages)=> {
    console.log(messages)
})
//Resolves or rejects multiple promises at once

//Promise.race()

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then ((message)=> {
    console.log(message)
})

// Promise.race will return a single message when one of the videos is done

//Fetch API

fetch('https://reqres.in/api/users')
.then(res => {
    if(res.ok){
    console.log('Success')
}else {
    console.log("Not Successful")
}
})
.then(data => console.log(data))
/*the code makes a GET request to the specified API endpoint, checks if the response is successful, 
logs either 'Success' or 'Not Successful' based on the response status, and then logs the data from the response to the console. */