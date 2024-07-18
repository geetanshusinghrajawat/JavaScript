const user = {
    username: "Geetanshu",
    price: 199,
    welcomeMessage: function()
    {
        console.log(`Hello ${this.username}, welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Bhupesh"
// user.welcomeMessage();
// console.log(this);

function one(){
    let username = "Geetanshu"
    console.log(this.username);
}
//one()

const two = function()
{
    let username = "Geetanshu"
    console.log(this.username)
}
const three = ()=>
{
    let username = "Geetanshu"
    console.log(this.username)
}
// three()

// () => {} this is a basic arrow function  
// const addTwo = () => {...code...} arrow function can be saved in a variable aswell

// const addTwo = (num1,num2) => { //this is called as explicit return
//     return num1 +num2
// }

// console.log(addTwo(3,4))

const addTwo = (num1,num2) => num1 + num2 // this is called as implicit return
// console.log(addTwo(3,4))
const four = (num1,num2) => ({username:"Geetanshu"})// To return an object in implicit return
console.log(four(3,4))