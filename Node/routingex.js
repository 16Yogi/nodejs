const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("Data send by browser =>>>",req.query.name);
    res.send('Hello, THis is home page,'+ req.query.name);    
});

app.get('/about',(req,res)=>{
    res.send('Hello, THi is about page');
});

app.get('/help',(req,res)=>{
    res.send('Hello, THis is help page');
});

app.listen(5000);