const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
const db = require('./config/mongoose');
const TODO = require('./model/todo');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("assets"));

// Middleware for accessing req data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Controller for home page
app.get('/', (req, res)=>{
    TODO.find({}, (err, todoDetails)=>{
        if(err){
            console.error.bind(console, "Error in finding todo details!");
            return;
        }
        return res.render('home', {
            details: todoDetails
        });
    });
});

// Controlller for accessing form data and storing it on the database
app.post('/add-to-list', (req, res)=>{
    TODO.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, (err, detail)=>{
        if(err){
            console.error.bind(console, "Error in creating todo!");
        }
        return res.redirect('back');
    });
});

// Controller for deleting entry from the database
app.post('/delete-from-list', (req, res)=>{
    TODO.findByIdAndDelete(req.body.id, (err)=>{
        if(err){
            console.error.bind(console, "Error in finding the detail!");
            return;
        }
        return res.redirect('back');
    });
});

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`The server is up and running on port ${port}`);
})