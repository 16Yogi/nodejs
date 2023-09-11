const http = require('http');

// ---1-----

// http.createServer().listen(4500);
// test(a,b)
// {
   
// }

// test(10,20)

// ----------------------

// 2------------------
// http.createServer((req,resp)=>{
//    resp.write("Hello I am first server");
//    resp.end();
// }).listen(4500);


// 3----------------------

// function dataControl(req,resp)
// {
//     resp.write("Hello I am server 2");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

// 4---------------------------

const dataControl=(req,resp)=>
{
    resp.write("Hello I am server 2");
    resp.end();
}
http.createServer(dataControl).listen(4500);


