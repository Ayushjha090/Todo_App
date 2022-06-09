const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("assets"));

app.get('/', (req, res)=>{
    return res.render("home")
});



app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`The server is up and running on port ${port}`);
})