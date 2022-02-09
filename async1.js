// bydefoult callback is not asynchornouse ,but for writing asynchronous function we use callback
// any function which is writen in js is synchronouse 
console.log('before');
const fs=require('fs');
fs.readFile('f1.txt',cb);
// aysnchronouse errfirst callback-> it is callback in which err is a first parameter

function cb(err,data)
{
    if(err)
    console.log(err);
    else
    console.log('this is file data ->'+data);
    
}
fs.readFile('f2.txt',cb2);
// aysnchronouse errfirst callback-> it is callback in which err is a first parameter

function cb2(err,data)
{
    if(err)
    console.log(err);
    else
    console.log('this is file data ->'+data);
}
console.log('after');