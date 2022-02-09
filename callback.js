// callback-> any function that can be passed to another function known as calback
// it means a function can be called with other function as a argument
function printfirstName(firstName,cb,cb1)
{
    console.log(firstName);
    cb('saheb');
    cb1(20);
}
function printLastName(lastName)
{
   console.log(lastName);
}
function printAge(age)
{
    console.log(age);
}
printfirstName('Deepak',printLastName,printAge);
// calculator using callback
function calc(cb1,cb2,cb3,cb4){
    cb1(2,4);
    cb2(4,2);
    cb3(2,4);
    cb4(4,2);

}
function add(a,b)
{
    console.log(a+b);
}
function sub(a,b)
{
    console.log(a-b);
}
function mul(a,b)
{
    console.log(a*b);
}
function div(a,b)
{
    console.log(a/b);
}
calc(add,sub,mul,div);