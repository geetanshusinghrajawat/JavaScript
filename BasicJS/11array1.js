//arrays are resisable in javascript
//array elements cannot be accessed using arbitrary string as indexes
//array make shallow copies of arrays i.e. sharing a same reference point in another array

const myArr = [0,1,2,3,4,5,6,7,8]
console.log(myArr[0]);

// Array Methods
myArr.push(6) // this adds a element to the end of the array
//console.log(myArr);

myArr.pop() // this removes the element at the end of the array
console.log(myArr);

myArr.unshift(5)//this adds a new element at the start of the array
console.log(myArr);
myArr.shift()//this removes the element from the start of the array
console.log(myArr);
console.log(myArr.includes(6)); //this checks the array if the given element is presented or not
console.log(myArr.indexOf(5)); // this tells about the element presented at that index

/*
slice ke andar n-1 index chalta h
splice ke andar n index chalta h
slice ke andar original array ki copy banti h
splice ke andar original array mai se element delete hojate h (maipulates the array)
*/