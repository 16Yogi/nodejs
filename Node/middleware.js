const express = require('express');
const app = express();

const reqFilter=(req,resp,next)=>{
//   console.log('reqFilter');
//   next();

// 2
    if(!req.query.age)
    {
       resp.send("plase enter your age");
    }
    else if(req.query.age<18)
    {
       resp.send("18");
    }
    
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('this is home page')
});

app.get('/user',(req,res)=>{
    res.send('this is my user page')
});

app.listen('5000')
