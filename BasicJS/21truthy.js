//falsy values are: false, 0 , -0, BigInt 0n, empty strings "", null, undefined, NaN
//truthy values are: true, "0", "false", " ", [], {}, function(){}
const userEmail ="geetanshu@gmail.com"
if(userEmail)
{
    console.log("Have User Email");
}
else 
{
    console.log("dont have user email");
}

//NULLISH COALESING OPERATOR (??): null undefined

let val1;
// val1 = 5 ??10; 
// val1 = null ?? 10;
// val1 = undefined ??10
// val1= null??10??20
console.log(val1);

//TERNIARY OPERATOR:- condition ? true :false
const a = 100
a >= 80 ? console.log("More than 80") : console.log("less than 80")