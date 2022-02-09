console.log("before");
const fs=require('fs');
let data=fs.readFileSync('f1.txt');

console.log('this is file data ->'+data);
console.log('after');