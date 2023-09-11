// 1------------------

// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-Type':'application\json'});
//     resp.write(JSON.stringify({name:'Yogendra',email:'yogi@gmail.com'}));
//     resp.end();
// }).listen(5000);


// 2-------------------
const http = require('http');
const data = require('./myapidata');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000)