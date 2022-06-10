// Require the library
const mongoose = require('mongoose');

// Creating the mongodb connection
mongoose.connect('mongodb://localhost/todo-app');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting the database!'));
db.once('open', ()=>{
    console.log('Successfully connected to database : MongoDB');
});

module.exports = db;
