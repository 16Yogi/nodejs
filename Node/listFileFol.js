// const fs = require('fs');
// fs.writeFileSync('apple.txt','this is a apple file');

// 2-----
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'File');
// // console.warn(dirPath)

// for(i=0;i<=5;i++){
//     fs.writeFileSync(dirPath+"/apple"+i+".txt","a simple text file");
//     // fs.writeFileSync(`hello${i}.txt`,"A simple txt file");
// }


// -3----------------

const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'File');

fs.readdir(dirPath,(err,File)=>{
    // console.warn(File)
    // or
    File.forEach((item)=>{
        console.log("file name is:",item)
    })
})