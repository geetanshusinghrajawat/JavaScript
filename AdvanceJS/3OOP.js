// const user = {
//     username:"Geetanshu",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from the database")
//         console.log(`Username:${this.username}`);
//         console.log(this.getUserDetails);
//     }
   
// }
//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(`Username:${this.username}`);

//const pomiseOne = new Promise()
//const date = new Date()

function User(username,loginCount,isLoggedIn)
{
    this.username = username
    this.loginCount= loginCount
    this.isLoggedIn= isLoggedIn

    return this
}
const userOne = User("Geetanshu",12,true)
const userTwo= User("Geetu",11,false) //this will overwrite the data in function
console.log(userOne)