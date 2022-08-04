const axios = require('axios')
const testData = {
    "_id": "6009c90d498eb2e23180c611",
    "name": "Test Book Name",
    "authors": "5fc8dcd114d0523b984c08d5",
    "publisher": "Test Publisher"
  }

axios.post('http://localhost:3000/api/book',{})
.then(res => {
    console.log("Blank POST fail")
    process.exitCode = 1;
})
.catch(error => {
    if (error.response) {
        if (error.response.status === 400){
            console.log("Blank POST Success")
        } else {
            console.log("Bad response to blank POST")
            process.exitCode = 1;
        }
    } else {
        console.log("Bad response to blank POST")
        process.exitCode = 1;
    }
})

axios.post('http://localhost:3000/api/book',testData)
.then(res => {
    console.log("POST Success")
    
})
.catch(error => {
    console.log("POST error")
    process.exitCode = 1;
})

axios.get('http://localhost:3000/api/books/')
    .then(res => {
        console.log("GET all Success")
    })
    .catch( err => {
        console.log("GET all error");
        process.exitCode = 1;
    })

axios.get('http://localhost:3000/api/book/'+testData._id)
    .then(res => {
        console.log("GET by id Success")
    })
    .catch( err => {
        console.log("GET by id error");
        process.exitCode = 1;
    })

axios.patch('http://localhost:3000/api/book/'+testData._id, testData)
    .then(res => {
        console.log("PATCH by id Success")
    })
    .catch( err => {
        console.log("PATCH by id error");
        process.exitCode = 1;
    })

axios.delete('http://localhost:3000/api/book/'+testData._id, testData)
    .then( res => {
        console.log("Delete Success")
    })
    .catch( err => {
        console.log("DELETE error");
        process.exitCode = 1;
    })