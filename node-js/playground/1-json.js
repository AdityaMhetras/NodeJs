const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
// // convert object to JSON
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//load json file
const dataBuffer = fs.readFileSync('1-json.json')
console.log('dataBuffer'+dataBuffer);
// convert file into JSON
const dataJSON = dataBuffer.toString()
console.log(dataJSON);
// convert JSON into JS object
const data = JSON.parse(dataJSON)
console.log(data)
console.log(data.name)
data.name = 'Aditya'
data.age = 31

const dataJSONNew = JSON.stringify(data)
fs.writeFileSync('1-json.json',dataJSONNew)
