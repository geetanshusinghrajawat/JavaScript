let a = "33a"

console.log(typeof a);
console.log(typeof (a));

let newnum = Number(a);

console.log(typeof newnum);

console.log(newnum);

/*
If a string containing alphabets is converted in a number then  the value is number but NaN is returned..
If a null variable is converted in number then the value is number i.e. 0.
if a undefined variable is converted in number then the value is number but NaN is returned.

*/

let b = 33

let newstr = String(b)

console.log(typeof newstr)

console.log(newstr)