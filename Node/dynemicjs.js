const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

// set templet engine 
app.set('view engine','ejs');

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/home.html`)
});

app.get('/profile',(_,res)=>{
    const user={
        name:'yogi',
        email:'yogi@gmail.com',
        city:'bhopal',
        skills:['html','css','js']
    }
   res.render('profile',{user});
});

app.get('/login',(_,res)=>{
    res.render('login')
});

app.listen('5000')