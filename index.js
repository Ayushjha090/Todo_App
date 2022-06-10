const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
const db = require('./config/mongoose');
const TODO = require('./model/todo');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("assets"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res)=>{
    return res.render("home")
});

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

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`The server is up and running on port ${port}`);
})