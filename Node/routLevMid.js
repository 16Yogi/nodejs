const express = require('express');
const app = express();
const reqFilter = require('./middlevers.js'); 
//for 25 30 mod
const route = express.Router();
route.use(reqFilter);

// ----------------------


//user external file

// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Please provide your age");
//     }else if(req.query.age<18){
//         resp.send("Your are under aged");
//     }else{
//         next();
//     }
// }

// app.use(reqFilter);

app.get('/',(res,resp)=>{
    resp.send('welcome to home page')
});

app.get('/users',reqFilter,(res,resp)=>{
    resp.send('welcome to user page')
});

app.get('/about',(res,resp)=>{
    resp.send('welcome to about page')
});

//use multi modules
route.get('/contact',(res,resp)=>{
    resp.send('welcome to contact page')
});

app.use('/',route);
app.listen(5000)