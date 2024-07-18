function SayMyName()
{
    console.log("Geetanshu");
}
// SayMyName() this is how to call a function

// function AddTwoNumbers(num1, num2){ //parameter has been given
//     console.log(num1+num2);
// }

//AddTwoNumbers(10,20); // arguments has been given

//const result = AddTwoNumbers(10,20)
//the function is not returning anhthing its the printing the log statement
//console.log(result);

function AddTwoNumbers(num1, num2)
{
    //let res = num1 + num2;
    return num1+num2
}
const result = AddTwoNumbers(10,20)
//console.log(result);

function UserLogin(username="sam"){ // this is how you give a default value to the parameter
    if(!username){ // username === undefined can be used and also  !username can be used
        //console.log("Please enter a username");
    }
    else{
    return`${username} just logged in`
    }
}
// console.log(UserLogin())

function CalculateCartPrice(...num) // . . . three dots is also known as rest operator this is used when you dont know the number of arguments 
{
    return num
}
//console.log(CalculateCartPrice(10,20,40,60,50));

const user = {
    username: "Geetanshu",
    price: 199
}
function handleObjects(anyobject)
{
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
}

handleObjects(user);
handleObjects(
    {
        username:"Akshay",
        price: 200
    }
)

const Arr1 = [200,400,100,600]

function returnSecondValue(Array)
{
    return Array[1]
}
console.log(returnSecondValue(Arr1));