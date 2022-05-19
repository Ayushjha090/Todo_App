const express = require('express');
const port = 8000;

const app = express();
app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`The server is up and running on port ${port}`);
})