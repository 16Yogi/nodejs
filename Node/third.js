// export
// import {} from './second'
const fs = require('fs');
const second = require('./second')

// console.log(second.aa);
console.log(second.c())
fs.writeFileSync("test.txt","ashkdfjas");