const http = require('http');
// ?1
// http.createServer().listen(4500);

// test(a,b)
// {
    

// }
// test(10,20);

// 2

// http.createServer((req,resp)=>{
//    resp.write("<h1>Hello this is yogi</h1>");
//    resp.end();
// }).listen(4500);


// 3
function dataControl(req,resp)
{
   resp.write("Hello I am test function");
//    resp.end();
}

// http.createServer(dataControl).listen(4500);


// 4

const dControl = (a,b)=>{
    b.write("Hello I arrow function test 4");
    b.end();
}
http.createServer(dControl).listen(4500);


