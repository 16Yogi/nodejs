const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('Hello, THis is home page');
    
});

app.get('/about',(req,res)=>{
    res.send('Hello, THi is about page');
});

app.get('/help',(req,res)=>{
    res.send('Hello, THis is help page');
});

app.listen(5000);