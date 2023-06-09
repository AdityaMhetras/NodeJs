const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title'
        }
    },
    handler: function () {
        console.log('Adding a new note');
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'REmove a note',
    handler: function () {
        console.log('Removing the note');
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function () {
        console.log('Reading the note');
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler: function () {
        console.log('listing the notes');
    }
})

// add, remove, read, list
console.log(yargs.argv)

