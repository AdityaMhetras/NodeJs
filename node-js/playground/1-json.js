const fs = require('fs')

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}
// convert object to JSON
const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

