const a = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(a);

const chai = {
    name: "GingerChai",
    price:200,
    isAvailable:true
}
console.log(chai);
const b = Object.getOwnPropertyDescriptor(chai,"name")
console.log(b);

Object.defineProperties(chai,'name',{
    writable:false,
    enumerable:false
})