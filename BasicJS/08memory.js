// two type of memory allocation
// Stack and Heap
// Stack(Primitive):when this memory is used user get a copy of variable
// Heap(Non-Primitive): provides a reference of original value

let name1 = "phela naam"

let name2 = name1
name2 = "Dusra naam" // this will not affect the value of name1 as this memory is stack memory
console.log(name1) // phela naam is the output
console.log(name2) // dusra naam is the output

let user1 = {
    email: "user@example.com",
    upi: "user@ybl"
}
let user2 = user1

console.log(user2);

user2.email = "hahaha@email.com" // this will affect the value of user aswell 
// both point to the same address (reference)

console.log(user1);//email changed
console.log(user2);//email changed