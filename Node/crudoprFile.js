const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'File');
const filePath = `${dirPath}/mango.txt`;

// create
// fs.writeFileSync(filePath,'this is a simple text file');

// read
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

// update
// fs.appendFile(filePath,'and file name is mango.txt',(err)=>{
//     if(!err) console.log("File is updated")
// })

// rename
// fs.rename(filePath,`${dirPath}/fruits.txt`,(err)=>{
//     if(!err) console.log("File name is updated")
// })


// delte
fs.unlinkSync(`${dirPath}/fruits.txt`)
