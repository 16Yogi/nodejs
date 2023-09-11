const express = require('express');
const app = express();

app.get("",(req,res)=>{
    res.send(`
        <h1>This is my home page</h1>
        <a href="/">Go to about</a>
        <a href="/about">Go to about</a>
        <a href="/help">Help</a>
    `);
});

// write html
app.get("/about",(req,res)=>{
   res.send(`
   <a href="/">Go to about</a>
        <a href="/about">Go to about</a>
        <a href="/help">Help</a>
     <input type="text" placeholder="user name"  value="${req.query.name}"/>
     <button>Click me</button>
   `);
});

app.get("/help",(req,res) =>{

    res.send([
        {
            name:'Yogi',
            email : 'yogi@gmail.com'
        },
        {
            name:'Yogendra',
            email : 'yogendra@gmail.com'
        }
    ]);
});
app.listen(5000);