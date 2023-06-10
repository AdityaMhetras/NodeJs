const book = {
    title: '',
    author: 'Ryan Holiday'
}
// convert object to JSON
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// convert JSON to Object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author);